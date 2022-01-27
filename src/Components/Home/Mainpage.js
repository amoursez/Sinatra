import React from 'react';
import './Mainpage.css'
import vinyl from '../Home/vinyl sinatra.png'
import MusicPlayerSlider from './MusicPlayer';

const Mainpage = () => {
return(
   
    <div class = "main">
        <div class="second">
        <div class = "player">
        <MusicPlayerSlider/>
        </div>
        <h1>We bring lifelong <span class="yellow"> music </span> memories into every home.</h1>
        </div>
        <div class = "decoration"> 
         <img id="vinyl" src={vinyl}></img></div>
            </div>
    );
        
};

export default Mainpage;