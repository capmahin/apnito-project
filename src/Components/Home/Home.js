import React from 'react';
import Client from '../Client/Client';
import Team from '../Team/Team';
import About from './About/About';
import MIssonVisson from './About/MissonVission/MIssonVisson';
import Footer from './Footer/Footer';
import NavBars from './NavBars';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <NavBars/>
            <Slider/>
            <About/>
            <MIssonVisson/>
            <Client/>
            <Team/>
            <Footer/>
        </div>
    );
};

export default Home;