import Carousel from 'react-bootstrap/Carousel';
import "./css/MySliderStyle.css";
function MySlider() {
  return (
    <Carousel className='my-auto'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/slider-1.jpg")}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Distance learning for kids</h3>
          <p>Keep your child and keep him at home to learn.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/slider-2.jpg")}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Make your child acquire new skills</h3>
          <p>acquiring new skills increases children's IQ.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("./img/slider-3.jpg")}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Your child's smile while learning</h3>
          <p>
          a simple explanation for the child makes him happy while learning.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MySlider;