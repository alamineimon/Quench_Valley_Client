import React from 'react';
import About from '../../../components/About/About';
import Blog from '../../../components/Blog/Blog';
import Gallery from '../../../components/Gallery/Gallery';
import Menu from '../../../components/Menu/Menu/Menu';
import Shop from '../../../components/Shop/Shop';
import Slide from '../../Slide/Slide';
import Banner from '../Banner/Banner';


const Home =() => {
    return (
        <div>
            <Banner></Banner>
            <Slide></Slide>
            <Menu></Menu>
            <Gallery></Gallery>
            <Shop></Shop>
            <Blog></Blog>
            <About></About>
        </div>
    );
}

export default Home;