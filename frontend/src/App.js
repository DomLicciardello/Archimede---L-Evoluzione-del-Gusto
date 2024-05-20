import './App.css';
import SiteCarousel from './components/carousel/SiteCarousel';
import SiteNavbar from './components/navbar/SiteNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <SiteNavbar></SiteNavbar>
    <SiteCarousel></SiteCarousel>
    </>
  );
}

export default App;