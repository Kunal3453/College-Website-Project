
import './App.css';
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './components/Home'
import Card from './components/Card';
import PlaceOriginal from './components/PlaceOriginal';
import About from './components/About';
import Signup from './components/Signup'
import Login from './components/Login'
import Show from './components/Show'
 function App() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/Card' element={<PlaceOriginal />} />
    <Route path='/Card/Fees Structure' element={<Card />} />
    <Route path='/Card/Faculty' element={<Card />} />
    <Route path='/Card/About' element={<About />} />
    <Route path='/Card/Contact' element={<Card />} />
    <Route path='/About' element={<About />} />
    <Route path='/Card/Placement'element={<PlaceOriginal/>} />
    <Route path='/Home' element={<Home />} />
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Show" element={<Show/>}/>
   
   </Routes>
  );
}

export default App;
