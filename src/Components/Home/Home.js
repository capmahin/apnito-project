import React from 'react';
import Client from '../Client/Client';
import Team from '../Team/Team';
import About from './About/About';
import MIssonVisson from './About/MissonVission/MIssonVisson';
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
        </div>
    );
};

export default Home;