import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="mainHead" onSelect={handleSelect} slide={true} interval={60000} >
      <Carousel.Item>
        <div className="carouselText container">
          <div className="textCarousel">
          <h1>ASAN Könüllüləri</h1>
          <p>Könüllü sıralarına <b>SƏN</b> də qoşul.</p>
          <button type={'button'} className='defaultButton'>Ətraflı oxu</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>

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

export default ControlledCarousel;
