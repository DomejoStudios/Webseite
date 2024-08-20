
import './App.css'
import Nav from './nav.jsx'
import Header from './header.jsx'
import Ablauf from './ablauf.jsx'
import UeberUns from './ueber_uns.jsx'
import Diensleitungen from './dienstleistungen.jsx'
import Projekte from './projekte.jsx'
import Kontakt from './kontakt.jsx'
import Footer from './footer.jsx'

function App() {
  
  const slides = [
    '/harmonyhaven1.jpg',
    '/harmonyhaven2.jpg',
    '/harmonyhaven3.jpg',
    '/harmonyhaven4.jpg',
    '/harmonyhaven5.jpg',
    '/harmonyhaven6.jpg',
    '/harmonyhaven8.jpg',
    '/tastyBites1.jpg',
    '/tastyBites2.jpg',
    '/tastyBites4.jpg',
    '/tastyBites5.jpg',
    'ThreePointStudios.jpg',
    'ThreePointStudios2.jpg',
    'ThreePointStudios3.jpg',
    'ThreePointStudios4.jpg',
    'ThreePointStudios5.jpg',
    '/lumina1.jpg',
    '/lumina2.jpg',
    '/lumina3.jpg'
  ];
  
  
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <Ablauf></Ablauf>
      <UeberUns></UeberUns>
      <Projekte slides={slides} interval={3000}></Projekte>
      <Diensleitungen></Diensleitungen>
      <Kontakt></Kontakt>
      <Footer></Footer>
    </>
  )
}

export default App
