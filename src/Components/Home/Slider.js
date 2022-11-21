import React, { useState } from "react";
import { Carousel } from "react-bootstrap";


const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100 "
          src="https://media-exp1.licdn.com/dms/image/C4D22AQHaZWnzrODTTw/feedshare-shrink_800/0/1664683857024?e=2147483647&v=beta&t=ixDfjb5QF9Hx652ECLAoEoxz3-FvIwcQk84-ptQEvMg"
          alt="First slide"
        />
        <Carousel.Caption>
        <h3>Apnito</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100 "
          src="https://media-exp1.licdn.com/dms/image/C4D22AQHaZWnzrODTTw/feedshare-shrink_800/0/1664683857024?e=2147483647&v=beta&t=ixDfjb5QF9Hx652ECLAoEoxz3-FvIwcQk84-ptQEvMg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Apnito</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ height: "700px" }}
          className="d-block w-100 "
          src="https://media-exp1.licdn.com/dms/image/C4D22AQHaZWnzrODTTw/feedshare-shrink_800/0/1664683857024?e=2147483647&v=beta&t=ixDfjb5QF9Hx652ECLAoEoxz3-FvIwcQk84-ptQEvMg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Apnito</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;