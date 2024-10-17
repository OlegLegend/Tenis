import { useEffect, useState } from "react"
import TrenerService from "../../services/TrenerService"
import { Button, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function TreneriPregled(){

    const navigate = useNavigate()

    const[treneri, setTreneri] = useState();

    async function dohvatiTrenerove(){
        const odgovor = await TrenerService.get();
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        setTreneri(odgovor.poruka)
    } 

    // Ovaj hook (kuka) se izvodi dolaskom na stranicu Trenerovi
    useEffect(()=>{
       dohvatiTrenerove();
    },[])

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeTrenera(sifra)
    }

    async function brisanjeTrenera(sifra) {
        
        const odgovor = await TrenerService.brisanje(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        dohvatiTrenerove();
    }


    return(
        <>
        <Link to={RouteNames.TRENER_NOVI}
        className="btn btn-success siroko">Dodaj novi Trener</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Ime</th>
                    <th>Prezime</th>
                   
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {treneri && treneri.map((Trener,index)=>(
                    <tr key={index}>
                        <td>
                            {Trener.ime}
                        </td>
                        <td>
                            {Trener.prezime}
                        </td>
                        <td>
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(Trener.sifra)}
                            >
                                Obriši
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            onClick={()=>navigate(`/treneri/${Trener.sifra}`)}
                            >
                                Promjena
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}