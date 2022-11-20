import React from 'react';
import Client from '../Client/Client';
import About from './About/About';
import NavBars from './NavBars';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <NavBars/>
            <Slider/>
            <About/>
            <Client/>
        </div>
    );
};

export default Home;