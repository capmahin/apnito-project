import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "./About.module.css";

const About = () => {
    return (
        <div>
            <Container className='py-3'>
                <Row>
                <Col xs={4}>
                  <h1 className='  text-warning '>About </h1>
                  <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium, blanditiis odio non qui exercitationem nobis repellendus, architecto nihil voluptatum doloribus distinctio velit. A dignissimos aspernatur cumque doloremque, nemo doloribus!</h5>
                  <button className={`${styles["explore-button"]} me-4`}>
              Explore
            </button>
            
               </Col>
               <Col xs={4} >
               <h1 className='  text-warning'>Mission</h1>
               <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias possimus accusantium quisquam a eum eos impedit repellat. Natus distinctio temporibus, iste animi enim officia non minus nemo rerum corrupti dolore!</h5>
               <button className={`${styles["explore-button"]} me-4`}>
              Explore
            </button>
               </Col>
               <Col xs={4} >
               <h1 className='text-warning'>Vision</h1>
               <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis in possimus dicta, earum quos deleniti hic ducimus atque exercitationem dolorem, facilis iure? Temporibus dolorum, mollitia eligendi doloribus cupiditate repellat.</h5>
               <button className={`${styles["explore-button"]} me-4`}>
              Explore
            </button>
               </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;