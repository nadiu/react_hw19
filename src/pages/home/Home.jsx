import React from 'react';
import './Home.css'
import react_icon from '../../img/react_icon.png'

const Home = () => {
    return (
        <div className='home_page'>
            <h1 className='title'>Single Page Application</h1>
            <img className='main_img' src={react_icon} alt='react icon'/>
        </div>
    );
};

export default Home;