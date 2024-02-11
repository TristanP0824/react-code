import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact' 
import About from './pages/About'
import Navbar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function APP(){
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}