import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./About.module.css";

const About = () => {
    return (
        <div>
            <Container className='py-3 '>
                <Row>
                <Col xs={6} className="py-5">
                  <h1 className='  text-dark text-center'>!! About !! </h1>
                  <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium, blanditiis odio non qui exercitationem nobis repellendus, architecto nihil voluptatum doloribus distinctio velit. A dignissimos aspernatur cumque doloremque, nemo doloribus!</h5>
                  <button className={`${styles["explore-button"]} me-4`}>
              Explore
            </button>           
               </Col>
               <Col xs={6}>
                <img style={{ height: "400px" }} className="w-100" src="https://media-exp1.licdn.com/dms/image/C4D22AQHaZWnzrODTTw/feedshare-shrink_800/0/1664683857024?e=2147483647&v=beta&t=ixDfjb5QF9Hx652ECLAoEoxz3-FvIwcQk84-ptQEvMg" alt="" />
               </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;