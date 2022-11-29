import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from "../About.module.css";
const MIssonVisson = () => {
    return (
        <div>
            <Container className='py-4' fluid>
                <Row>
                <Col xs={6} className="px-5">
                  <h1 className='  text-dark text-center'>Mission </h1>
                  <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium, blanditiis odio non qui exercitationem nobis repellendus, architecto nihil voluptatum doloribus distinctio velit. A dignissimos aspernatur cumque doloremque, nemo doloribus!</h5>
                  <button className={`${styles["explore-button"]} me-4`}>
              Explore
            </button>           
               </Col>
                <Col xs={6} className="px-5">
                  <h1 className='  text-dark text-center'>Vission </h1>
                  <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium, blanditiis odio non qui exercitationem nobis repellendus, architecto nihil voluptatum doloribus distinctio velit. A dignissimos aspernatur cumque doloremque, nemo doloribus!</h5>
                  <button className={`${styles["explore-button"]} me-4`}>
              Explore
            </button>           
               </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MIssonVisson;