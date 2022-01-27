import React from 'react';
import './PopUp.css'
/* import {popupImage} from '../PopUp/img.png' */
import Box from '@mui/material/Box';

const PopUpWindow = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div class="heading">ENJOY MUSIC WITH DISCOUNT</div>
                <p class = 'discount'>Take off 90% sitewide</p>
                <Box
        component="img"
        sx={{
          height: 250,
          width: 500,
          margin: 0,
          marginLeft: 7,
          borderRadius: 10,
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1488841714725-bb4c32d1ac94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1430&q=80"
      />
                <button className='close-btn' onClick={()=> props.setTrigger(false)}>X</button>
                <span class="code">CODE:WINRER2022</span>
                {props.children}
            </div>
        </div>
    ): "";
};

export default PopUpWindow;