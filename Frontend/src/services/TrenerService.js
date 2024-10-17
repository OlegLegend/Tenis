import { HttpService } from "./HttpService";



async function get(){
    return await HttpService.get('/Trener')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        //console.table(odgovor.data)
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja Trenerova'}   
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Trener/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja Trenera'}   
    })
}

async function dodaj(Trener){
    return await HttpService.post('/Trener',Trener)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Trenera'}   
    })
}

async function promjena(sifra,Trener){
    return await HttpService.put('/Trener/' + sifra,Trener)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Trenera'}   
    })
}

async function getBySifra(sifra){
    return await HttpService.get('/Trener/'+sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Problem kod dohvaćanja Trenera s šifrom '+sifra}   
    })
}


export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}
