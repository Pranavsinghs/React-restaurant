import React from 'react';

import { SubHeading} from '../../components';
import {images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' >
    <div className='app__wrapper_img app__wrapper_img-reverse '>
      <img src={images.chef} alt="chef" />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
         <img src={images.quote} alt=" quote img" /> 
         <p className='p__opensans'>At our restaurant, I strive to create dishes that not only showcase the finest ingredients but also tell a story of passion and creativity. </p>
       </div>
       <p className='p__opensans'>Each plate is a fusion of tradition and innovation, designed to leave a lasting impression. I invite you to experience the flavors that inspire me every day.</p>

      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo </p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign}  alt="sign" />
        
      </div>
    </div>
  </div>
);

export default Chef;
