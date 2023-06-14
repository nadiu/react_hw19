import React from 'react';
import './Pictures.css';
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'
import img4 from '../../img/img4.jpg'
import img5 from '../../img/img5.jpg'
import img6 from '../../img/img6.jpg'

const Pictures = () => {
    return (
        <div className='gallery'>
                <img className='img' src={img1} alt='img atom1'/>
                <img className='img' src={img2} alt='img atom2'/>
                <img className='img' src={img3} alt='img atom3'/>
                <img className='img' src={img4} alt='img atom4'/>
                <img className='img' src={img5} alt='img atom5'/>
                <img className='img' src={img6} alt='img atom6'/>
        </div>
    );
};

export default Pictures;