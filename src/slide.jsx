// import React, { useState } from 'react'
// import './App.css'
// const slide = (props) => {
//     const {id,name,title,quote,image} = props;

//     const {index, setIndex} = useState(0);
//     const handleNext = () => {
//         setIndex((prevIndex) => (prevIndex + 1) % props.length);
//     };
//     const handlePrevious = () => {
//         setIndex((prevIndex) => (prevIndex - 1 + props.length) % props.length);
//     };

//   return (
//     <div className='slide'>
//         <span className='icon' onClick={handlePrevious}><i class="bi bi-arrow-left-circle-fill"></i></span>

//      <div className='card'>
//             <div className='img-container' key ={id}>
//                 <img src={image} alt={name} className='img'/>
//                 <h2 className='head'>{name}</h2>
//                 <p className='title'>{title}</p>
//                 <p className='para'>{quote}</p>
//             </div>
//         </div>
//             <span className='icon' onClick={handleNext}><i class="bi bi-arrow-right-circle-fill"></i></span>
//     </div>
//   )
// }

// export default slide

import { useEffect, useState } from "react";
import "./App.css";

const Slide = ({ people }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % people.length);
    // console.log('Next index:', (index + 1) % people.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex - 1 + people.length) % people.length);
    // console.log('Previous index:', (index - 1 + people.length) % people.length);
  };
  useEffect(() => {
    const clear = setTimeout(() => {
      handleNext();
    }, 10000);

    // Automatically change slide every 3 seconds
  }, [index]);

  const { id, name, title, quote, image } = people[index];

  return (
    <div className="slide">
      <span className="icon" onClick={handlePrevious}>
        <i className="bi bi-arrow-left-circle-fill"></i>
      </span>

      <div className="card" key={id}>
        <div className="img-container">
          <img src={image} alt={name} className="img" />
          <h2 className="head">{name}</h2>
          <p className="title">{title}</p>
          <p className="para">{quote}</p>
        </div>
      </div>

      <span className="icon" onClick={handleNext}>
        <i className="bi bi-arrow-right-circle-fill"></i>
      </span>
    </div>
  );
};

export default Slide;
