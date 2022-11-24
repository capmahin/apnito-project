import React from "react";
import { Container, Row } from 'react-bootstrap';
import team from "../../image/assists/clinet/client.jpg"
import styles from './team.module.css'

const Team = () => {
  return (
  <section className={`${styles["team"]}`}>
     <Container className={`${styles["container"]}`}>
      <h1>OUR TEAM</h1>
      <Row>
        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team} className="img-fluid" alt="" />
            <ul>
          <a href=""> <li> <i class="fa fa-facebook"></i></li></a>
          <a href=""> <li> <i class="fa fa-twitter"></i></li></a>
          <a href=""> <li> <i class="fa fa-linkedin"></i></li></a>
            </ul>
          </div>
          <h2>Person One</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team} className="img-fluid"alt="" />
            <ul>
          <a href=""> <li> <i class="fa fa-facebook"></i></li></a>
          <a href=""> <li> <i class="fa fa-twitter"></i></li></a>
          <a href=""> <li> <i class="fa fa-linkedin"></i></li></a>
            </ul>
          </div>
          <h2>Person One</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team} className="img-fluid" alt="" />
            <ul>
          <a href=""> <li> <i class="fa fa-facebook"></i></li></a>
          <a href=""> <li> <i class="fa fa-twitter"></i></li></a>
          <a href=""> <li> <i class="fa fa-linkedin"></i></li></a>
            </ul>
          </div>
          <h2>Person One</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team} className="img-fluid" alt="" />
            <ul>
          <a href=""> <li> <i class="fa fa-facebook"></i></li></a>
          <a href=""> <li> <i class="fa fa-twitter"></i></li></a>
          <a href=""> <li> <i class="fa fa-linkedin"></i></li></a>
            </ul>
          </div>
          <h2>Person One</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Row>
     </Container>
  </section>
  );
};

export default Team;