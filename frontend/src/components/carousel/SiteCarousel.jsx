import Carousel from 'react-bootstrap/Carousel';
import carouselpic1 from '../../assets/carousel.jpg'
import carouselpic2 from '../../assets/carousel.jpg'
import carouselpic3 from '../../assets/carousel.jpg'
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
{/*         <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_pic_style d-block w-100"
          src={carouselpic2}
          alt="First slide"
        />
{/*         <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel_pic_style d-block w-100"
          src={carouselpic3}
          alt="First slide"
        />
{/*         <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default SiteCarousel;