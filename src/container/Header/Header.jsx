import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'; 
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
  <SubHeading  title="Chase the new flavour"/>
   <h1 className='app__header-h1'>The Key To Fine Dining</h1>
   <p className='p__opensans' style={{margin:'2rem 0'}}>Fine dining is all about creating an unforgettable experience through a blend of exceptional cuisine, refined atmosphere, and top-tier service. Every detail, from the presentation to the flavors, is meticulously crafted. It's where luxury meets culinary artistry to leave a lasting impression. </p>

 <button type='button ' className='custom__button'>Explore Menu </button>
    </div>
    <div className='app__wrapper_img'>
  <img src={images.welcome} alt='header img' />
    </div>
  </div>
);

export default Header;
