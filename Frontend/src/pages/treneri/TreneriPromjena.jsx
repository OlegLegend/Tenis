import TrenerService from "../../services/TrenerService"
import { Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";


export default function TreneriPromjena(){

    const [Trener,setTrener] = useState({})
    const navigate = useNavigate()
    const routeParams = useParams()

    async function dohvatiTrener(){
        const odgovor = await TrenerService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        let s = odgovor.poruka
        setTrener(s)
    } 

    useEffect(()=>{
        dohvatiTrener();
     },[])

     async function promjena(Trener) {
        //console.log(Trener)
        //console.log(JSON.stringify(Trener))
        const odgovor = await TrenerService.promjena(routeParams.sifra,Trener)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.TRENER_PREGLED)
    }

    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        //console.log(podaci.get('naziv'))
        promjena({
            ime: podaci.get('ime'),
            prezime: podaci.get('prezime')
        })
    }

    return(
        <>
        Promjena Trenera
        <Form onSubmit={obradiSubmit}>

        <Form.Group controlId="ime">
                <Form.Label>Ime</Form.Label>
                <Form.Control type="text" name="ime" required defaultValue={Trener.ime}/>
            </Form.Group>

            <Form.Group controlId="prezime">
                <Form.Label>Prezime</Form.Label>
                <Form.Control type="text" name="prezime" required defaultValue={Trener.prezime} />
            </Form.Group>
        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.Trener_PREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Promjeni Trener</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}