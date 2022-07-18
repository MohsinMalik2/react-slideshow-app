import React, { useState } from 'react';

import './Slides.css';

function Slides({slides}) {
   const [currentSlide, setCurrentSlide]= useState(0)
   const [restartIndex, setRestartIndex]= useState(false)
   const [prevIndex, setPrevIndex]= useState(false)
   const [nextIndex, setNextIndex]= useState(true)
   
   const restart= ()=>{
        setCurrentSlide(0)
        setRestartIndex(false)
        setPrevIndex(false)
        setNextIndex(true)
   }
   const previous= ()=>{
       if (currentSlide < 2) {
           setPrevIndex(false)
           setRestartIndex(false)
       } else {
            setPrevIndex(true)
            setRestartIndex(true)
            setNextIndex(true)
       }
       setCurrentSlide(currentSlide - 1)
   }
   const next= ()=>{
       if (currentSlide < slides.length-2) {
            setNextIndex(true)
            setRestartIndex(true)
            setPrevIndex(true)
       } else {
            setNextIndex(false)
            setRestartIndex(true)
            setPrevIndex(true)
       }
       setCurrentSlide(currentSlide + 1)
   }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={!restartIndex}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previous} disabled={!prevIndex}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next} disabled={!nextIndex}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides && slides[currentSlide].title}</h1>
                <p data-testid="text">{slides && slides[currentSlide].text}e</p>
            </div>
        </div>
    );

}

export default Slides;