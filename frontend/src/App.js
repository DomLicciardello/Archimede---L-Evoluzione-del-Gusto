import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contatti from './pages/Contatti'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contatti' element={<Contatti/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;