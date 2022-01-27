import React from 'react';
import './Mainpage.css'
import vinyl from '../Home/vinyl sinatra.png'
import MusicPlayerSlider from './MusicPlayer';
import { Box } from '@mui/material';
const Mainpage = () => {
return(
   
    <div className = "main">

        <div className ="second">
        <div className = "player">
        <MusicPlayerSlider/>
        </div>
        <h1 className='main-title'>We bring lifelong <span className="yellow"> music </span> memories into every home.</h1>
    
        
        </div>
        <div className = "decoration"> 
         <img id="vinyl" src={vinyl}></img></div>
            </div>
    );
        
};

export default Mainpage;