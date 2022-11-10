import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <Container>
                <Row>
                <Col xs={4}>
                  <h1>About </h1>
                  <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim praesentium, blanditiis odio non qui exercitationem nobis repellendus, architecto nihil voluptatum doloribus distinctio velit. A dignissimos aspernatur cumque doloremque, nemo doloribus!</h5>
               </Col>
               <Col xs={4}>
               <h1>Mission</h1>
               <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias possimus accusantium quisquam a eum eos impedit repellat. Natus distinctio temporibus, iste animi enim officia non minus nemo rerum corrupti dolore!</h5>
               </Col>
               <Col xs={4}>
               <h1>Vision</h1>
               <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae perferendis in possimus dicta, earum quos deleniti hic ducimus atque exercitationem dolorem, facilis iure? Temporibus dolorum, mollitia eligendi doloribus cupiditate repellat.</h5>
               </Col>
                </Row>

            
            </Container>
        </div>
    );
};

export default About;