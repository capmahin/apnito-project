import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./NavBars.css"

const NavBars = () => {
  return (
   <Container fluid>
    <Row>
      <Col>
      <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Apnito</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Service
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Web Scraming</a></li>
            <li><a class="dropdown-item" href="#">App Development</a></li>
            <li><a class="dropdown-item" href="#">Website Development</a></li>
            <li><a class="dropdown-item" href="#">Bot Development</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Online Learning Platform
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Online Terms</a></li>
            <li><a class="dropdown-item" href="#">Offline Terms</a></li>
            <li><a class="dropdown-item" href="#">PBL</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">WorkShop</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" >Products</a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <button class='btn'>---</button>
      </ul>
    </div>
  </div>
</nav>
    </div>
      </Col>
    </Row>
   </Container>
  );
};

export default NavBars;