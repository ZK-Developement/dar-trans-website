import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header'
import Footer from './components/footer'

import Maindt from './components/maindt'
import Flota from './components/flota'
import Ofirmie from './components/ofirmie'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Maindt />} />
        <Route path='/Flota' element={<Flota />} />
        <Route path='/O-Firmie' element={<Ofirmie />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
