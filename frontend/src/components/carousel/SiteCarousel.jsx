import Carousel from 'react-bootstrap/Carousel';
import carouselpic1 from '../../assets/carousel.jpg'
import carouselpic3 from '../../assets/carousel3.jpeg'
import { Link } from "react-router-dom";
import PrenotaTorta from '../prenota/PrenotaTorta';
import './style.css'

function SiteCarousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="carousel_pic_style d-block w-100"
          src={carouselpic1}
          alt="First slide"
        />
        <Carousel.Caption
        className='carousel_caption_style'>
          <Link to="/shop" style={{textDecoration:'none', color:'white'}}>
            <h2 className='title_carousel_style'>biscotti di mandorla</h2>
            <p>I nostri biscotti direttamente a casa tua!</p>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_pic_style d-block w-100"
          src={carouselpic3}
          alt="First slide"
        />
        <Carousel.Caption
        className='carousel_caption_style'>
            <h2 className='title_carousel_style'>prenotazione torte</h2>
            <PrenotaTorta/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SiteCarousel;