import Carousel from 'react-bootstrap/Carousel';
import '../Styles/carousel.scss';
function AutoCarousel() {
  return (
    <Carousel className='large-carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src='https://cdn.shopify.com/s/files/1/1338/0845/files/SailorMoon_collection_desktop.jpg?v=1582333909'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://tryhardguides.com/wp-content/uploads/2022/04/featured-spy-x-family-anime-poster-781x439.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images7.alphacoders.com/118/1184491.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AutoCarousel;