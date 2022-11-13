import React from 'react';
import About from './About/About';
import NavBars from './NavBars';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            <NavBars/>
            <Slider/>
            <About/>
        </div>
    );
};

export default Home;