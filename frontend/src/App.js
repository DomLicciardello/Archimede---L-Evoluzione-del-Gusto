import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home'
import Contatti from './pages/Contatti/Contatti'
import ChiSiamo from './pages/ChiSiamo/ChiSiamo';
import Prodotti from './pages/Prodotti/Prodotti';
import Shop from './pages/Shop/Shop';
import NotFound from './pages/NotFound/NotFound';
import InfoProdotto from './pages/InfoProdotto/InfoProdotto';
import Login from './pages/AreaRiservata/Login';
import AreaRiservata from './pages/AreaRiservata/AreaRiservata';
import AggiungiProdotto from './pages/AreaRiservata/AggiungiProdotto';
import ModificaProdotto from './pages/AreaRiservata/ModificaProdotto';
import { CartProvider } from './context/CartContext';

const isAdminAuth = () => {
  return localStorage.getItem('token') !== null;
};

const PrivateRoute = ({ element, ...rest }) => {
  return isAdminAuth() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chisiamo' element={<ChiSiamo/>}/>
        <Route path='/prodotti' element={<Prodotti/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/products/:id' element={<InfoProdotto/>}/>
        <Route path='/contatti' element={<Contatti/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/areariservata' element={<PrivateRoute element={<AreaRiservata/>}/>}/>
        <Route path='/areariservata/aggiungiprodotto' element={<PrivateRoute element={<AggiungiProdotto/>}/>}/>
        <Route path='/areariservata/modificaprodotto/:id' element={<PrivateRoute element={<ModificaProdotto/>}/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;