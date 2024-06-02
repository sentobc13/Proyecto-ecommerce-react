import React from 'react';
import { Carousel } from 'antd';
import './Home.scss';


import image1 from './images/foto7.jpg';
import image2 from './images/foto2.jpg';
import image3 from './images/foto9.jpg';
import image4 from './images/foto8.jpg';

const contentStyle = {
  height: '90vh',
  width: '100%',
  objectFit: 'cover'
};

const Home = () => (
  <Carousel autoplay>
    <div>
      <img src={image1} alt="Slide 1" style={contentStyle} />
    </div>
    <div>
      <img src={image2} alt="Slide 2" style={contentStyle} />
    </div>
    <div>
      <img src={image3} alt="Slide 3" style={contentStyle} />
    </div>
    <div>
      <img src={image4} alt="Slide 4" style={contentStyle} />
    </div>
  </Carousel>
);

export default Home;
