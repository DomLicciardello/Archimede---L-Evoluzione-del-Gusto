import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Contatti from './pages/Contatti/Contatti'
import ChiSiamo from './pages/ChiSiamo/ChiSiamo';
import Prodotti from './pages/Prodotti/Prodotti';
import Shop from './pages/Shop/Shop';
import NotFound from './pages/NotFound/NotFound';
import InfoProdotto from './pages/InfoProdotto/InfoProdotto';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chisiamo' element={<ChiSiamo/>}/>
        <Route path='/prodotti' element={<Prodotti/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/products/:id' element={<InfoProdotto/>}/>
        <Route path='/contatti' element={<Contatti/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;