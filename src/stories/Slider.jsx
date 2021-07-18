import React from 'react';

import './slider.css';


export const Slider= () => {
    return (
    <div class="slidecontainer">
    <input type="range" min="1" max="10" value="5" class="slider" id="myRange"/>
    
    </div>
  
  );
};