import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header'
import Footer from './components/footer'

import Maindt from './components/maindt'
import Flota from './components/flota'
import Ofirmie from './components/ofirmie'
import Galeria from './components/galeria'
import Kontakt from './components/kontakt'
import Polityka from './components/polityka'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Maindt />} />
        <Route path='/Flota' element={<Flota />} />
        <Route path='/O-Firmie' element={<Ofirmie />} />
        <Route path='/Galeria' element={<Galeria />} />
        <Route path='/Kontakt' element={<Kontakt />} />
        <Route path='/Polityka-Prywatności' element={<Polityka />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
