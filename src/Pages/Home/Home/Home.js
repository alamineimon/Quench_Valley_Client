import React from 'react';
import Menu from '../../../components/Menu/Menu/Menu';
import Slider from '../../../components/Sliders/Slider/Slider';


const Home =(props) => {
    return (
        <div>
            <Slider></Slider>
            <Menu></Menu>
            {/* <Banner></Banner> */}
        </div>
    );
}

export default Home;