import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import './App.css'
import NavBarEdunova from './components/NavBarEdunova';
import { Route, Routes } from 'react-router-dom';
import { RouteNames } from './constants';
import Pocetna from './pages/Pocetna';
import TreneriPregled from './pages/treneri/TreneriPregled';
import TreneriDodaj from './pages/treneri/TreneriDodaj';
import TreneriPromjena from './pages/treneri/TreneriPromjena';


function App() {

  return (
    <>
    <Container>
      <NavBarEdunova />
      <Routes>
        <Route path={RouteNames.HOME} element={<Pocetna/>} />

        <Route path={RouteNames.TRENER_PREGLED} element={<TreneriPregled/>}/>
        <Route path={RouteNames.TRENER_NOVI} element={<TreneriDodaj/>}/>
        <Route path={RouteNames.TRENER_PROMJENA} element={<TreneriPromjena/>}/>

      </Routes>
      <hr/>
      &copy; Oleg
    </Container>
    
    </>
  )
}

export default App
