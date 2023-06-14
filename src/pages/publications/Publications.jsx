import React from 'react';
import './Publications.css'
import logo1 from '../../img/logo1.png';
import comments_logo from '../../img/comments_logo.png';
import arrows_logo from '../../img/arrows_logo.png';
import heart_logo from '../../img/heart_logo.png';
import download_logo from '../../img/download_logo.png';




const Publications = () => {
    const ANAKIN_IMAGE = "https://preview.redd.it/z634jy02kpe61.png?width=640&crop=smart&auto=webp&v=enabled&s=53be943ac640705a6ec7ec810337c0b5d757e705";
    const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

    

return (
    <div className = "container">
        <div className="header">
            <img className="anakin" src = {ANAKIN_IMAGE} alt='anakin img'/>
            <p className="name">Anakin Skywalker</p>
            <img className="check" src = {logo1} alt='logo check'/>
            <p className="nickname">@dart_vader</p>
            <p className="date">26 февр.</p>
        </div>
        <div className="post">
            <div className="text">WTF? Who is Ray? Why she is Skywalker? Luke...?"</div>
            <img className="ray" src={RAY_IMAGE} alt="Ray Skywalker"/>
        </div>
        <div className="footer">
            <img className="msg" src={comments_logo} alt="comments_logo"/>
            <p className="score">482</p>
            <img className="arrow" src={arrows_logo} alt="arrows_logo"/>
            <p className="score">146</p>
            <img className="like" src={heart_logo} alt="like_logo"/>
            <p className="score">887</p>
            <img className="load" src={download_logo} alt="load_logo"/>
        </div>
    </div>
);
}

export default Publications;