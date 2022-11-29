import React from "react";
import { Container, Row } from 'react-bootstrap';
import team1 from "../../image/assists/team/member1.jpg"
import team2 from "../../image/assists/team/member2.jpeg"
import team3 from "../../image/assists/team/member3.jpg"
import team4 from "../../image/assists/team/member4.png"
import styles from './team.module.css'
import {FaInstagram,FaFacebook ,FaLinkedin} from "react-icons/fa"

const Team = () => {
  return (
  <section className={`${styles["team"]}`}>
     <Container className={`${styles["container"]}`} fluid>
      <h1>OUR TEAM</h1>
      <Row>
        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team4} className="img-fluid" alt="" />
            <ul>
            <a href=""> <li> <FaInstagram/></li></a>
          <a href=""> <li><FaFacebook/></li></a>
          <a href=""> <li> <FaLinkedin/></li></a>
            </ul>
          </div>
          <h2>Person One</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team1} className="img-fluid"alt="" />
            <ul>
          <a href=""> <li> <FaInstagram/></li></a>
          <a href=""> <li><FaFacebook/></li></a>
          <a href=""> <li> <FaLinkedin/></li></a>
            </ul>
          </div>
          <h2>Person Two</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team4} className="img-fluid" alt="" />
            <ul>
          <a href=""> <li> <FaInstagram/></li></a>
          <a href=""> <li><FaFacebook/></li></a>
          <a href=""> <li> <FaLinkedin/></li></a>
            </ul>
          </div>
          <h2>Person Three</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className={`${styles["profile"]} col-md-3 text-center`}>
          <div className={`${styles["img-box"]}`} >
            <img src={team3} className="img-fluid" alt="" />
            <ul>
            <a href=""> <li> <FaInstagram/></li></a>
          <a href=""> <li><FaFacebook/></li></a>
          <a href=""> <li> <FaLinkedin/></li></a>
            </ul>
          </div>
          <h2>Person Four</h2>
          <h3>Founder/CEO</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </Row>
     </Container>
  </section>
  );
};

export default Team;