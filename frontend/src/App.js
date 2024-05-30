import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contatti from './pages/Contatti/Contatti'
import ChiSiamo from './pages/ChiSiamo/ChiSiamo';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chisiamo' element={<ChiSiamo/>}/>
        <Route path='/contatti' element={<Contatti/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;