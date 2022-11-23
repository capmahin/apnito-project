import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import clinet1 from '../../image/assists/clinet/client.jpg'
import clinet2 from '../../image/assists/clinet/client1.jpg'
import clinet3 from '../../image/assists/clinet/client2.jpg'
import clinet4 from '../../image/assists/clinet/clinet3.jpg'
import styles from "./Clinet.module.css";


const Client = () => {
  return (
    <Container className={`${styles["container"]} px-2`}>
           <Row>
                <Col xs={12}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className={`${styles["carousel-indicators"]}`}>
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  </ol>
                  <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='row'>
                        <div className='col-md-4'>
                          <div className={`${styles["single-box"]}`}>
                             <div className={`${styles["img-area"]}`}>
                              <img src={clinet4} alt="" />
                             </div>
                             <div className={`${styles["img-text"]}`}>
                                    <h2>Person one</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores sed est libero, repudiandae recusandae rem molestiae ut sunt veritatis rerum a nihil, impedit eaque nemo, fuga dolorum distinctio! Aspernatur.</p>
                             </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className={`${styles["single-box"]}`}>
                             <div className={`${styles["img-area"]}`}>
                              <img src={clinet2} alt="" />
                             </div>
                             <div  className={`${styles["img-text"]}`}>
                                    <h2>Person two</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores sed est libero, repudiandae recusandae rem molestiae ut sunt veritatis rerum a nihil, impedit eaque nemo, fuga dolorum distinctio! Aspernatur.</p>
                             </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className={`${styles["single-box"]}`}>
                             <div className={`${styles["img-area"]}`}>
                              <img src={clinet3} alt="" />
                             </div>
                             <div  className={`${styles["img-text"]}`}>
                                    <h2>Person three</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores sed est libero, repudiandae recusandae rem molestiae ut sunt veritatis rerum a nihil, impedit eaque nemo, fuga dolorum distinctio! Aspernatur.</p>
                             </div>
                          </div>
                        </div>  
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className='row'>
                        <div className='col-md-4'>
                          <div className={`${styles["single-box"]}`}>
                             <div className={`${styles["img-area"]}`}>
                              <img src={clinet4} alt="" />
                             </div>
                             <div  className={`${styles["img-text"]}`}>
                                    <h2>Person four</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores sed est libero, repudiandae recusandae rem molestiae ut sunt veritatis rerum a nihil, impedit eaque nemo, fuga dolorum distinctio! Aspernatur.</p>
                             </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className={`${styles["single-box"]}`}>
                             <div className={`${styles["img-area"]}`}>
                              <img src={clinet1} alt="" />
                             </div>
                             <div  className={`${styles["img-text"]}`}>
                                    <h2>Person five</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores sed est libero, repudiandae recusandae rem molestiae ut sunt veritatis rerum a nihil, impedit eaque nemo, fuga dolorum distinctio! Aspernatur.</p>
                             </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className={`${styles["single-box"]}`}>
                             <div className={`${styles["img-area"]}`}>
                              <img src={clinet1} alt="" />
                             </div>
                             <div  className={`${styles["img-text"]}`}>
                                    <h2>Person six</h2>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur asperiores sed est libero, repudiandae recusandae rem molestiae ut sunt veritatis rerum a nihil, impedit eaque nemo, fuga dolorum distinctio! Aspernatur.</p>
                             </div>
                          </div>
                        </div>  
                    </div>
                  </div>
                 </div>
                </div>
                </Col>
           </Row>
    </Container>
  );
};

export default Client;