import React from 'react';
import './Mainpage.css'
import vinyl from '../Home/vinyl sinatra.png'
import MusicPlayerSlider from './MusicPlayer';
const Mainpage = () => {
return(
    <>
        <MusicPlayerSlider />
         <img id="vinyl" src={vinyl}></img>
    </>
    );
};

export default Mainpage;