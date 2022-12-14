import React from 'react';
import Menu from '../../../components/Menu/Menu/Menu';
import Slide from '../../Slide/Slide';
import Banner from '../Banner/Banner';


const Home =() => {
    return (
        <div>
            <Banner></Banner>
            <Slide></Slide>
            <Menu></Menu>
        </div>
    );
}

export default Home;