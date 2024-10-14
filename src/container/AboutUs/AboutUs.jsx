import React from 'react';
import {images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding ' id='about'>
     <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt='g letter ' />
     </div>

     <div className='app__aboutus-content flex__center '>
    <div className='app__aboutus-content_about'>
      <h1 className='headtext__cormorant'>About Us</h1>
      <img src={images.spoon} alt='about_spoon' className='spoon__img' />
      <p className='p__opensans'>At our restaurant, we are passionate about serving exceptional dishes crafted from the finest, freshest ingredients. Our team is dedicated to providing a warm, inviting atmosphere where every guest feels special. Join us for a memorable dining experience that celebrates both tradition and creativity.</p>
   <button type='button' className='custom__button'>Know More</button>
    </div>

<div className='app__aboutus-content_knife flex__center'>
  <img src={images.knife} alt="about_knife" />
</div>

<div className='app__aboutus-content_history'>
      <h1 className='headtext__cormorant'>Our History</h1>
      <img src={images.spoon} alt='about_spoon' className='spoon__img' />
      <p className='p__opensans'>Our journey began with a love for authentic, flavorful cuisine and a commitment to bringing people together through food. What started as a small family-owned eatery has grown into a beloved dining destination, known for our dedication to quality and innovation. With each dish, we honor our rich heritage while embracing modern culinary trends.</p>
   <button type='button' className='custom__button'>Know More</button>
    </div>



     </div>
  </div>
);

export default AboutUs;
