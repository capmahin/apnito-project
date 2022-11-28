import React from 'react';
import slider1 from '../../image/assists/slider/Slider2.jpg'
import  './Slider.css'

const Slider = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>App Development</h5>
        <p>Some representative placeholder content for the first slide.</p>
        <div className="slider-btn">
              <button className='btn btn-1'>Our service</button>
              <button className='btn btn-2'>Our service</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Website development</h5>
        <p>Some representative placeholder content for the second slide.</p>
        <div className="slider-btn">
              <button className='btn btn-1'>Our service</button>
              <button className='btn btn-2'>Our service</button>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slider1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Online Platform</h5>
        <p>Some representative placeholder content for the third slide.</p>
        <div className="slider-btn">
              <button className='btn btn-1'>Our service</button>
              <button className='btn btn-2'>Our service</button>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Slider;