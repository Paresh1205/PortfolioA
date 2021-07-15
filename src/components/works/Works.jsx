import React from 'react'
import './works.scss';
import { workData } from '../../data'
import { useState } from 'react';

function Works() {

    const [currentSlide,setCurrentSlide] = useState(0);
    const handleClick=(way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : 
        setCurrentSlide(currentSlide < workData.length - 1 ? currentSlide + 1 : 0 )
    }
    return (
        <div className="works" id="works">
            <h2 className="head">Project Works</h2>
            <div className="slider" style={{ transform : `translateX(-${currentSlide * 100}vw)`}}>
                {
                    workData.map(data => {
                        return (
                            <div className="container" key={data.id} >
                                <div className="item" >
                                    <div className="left">
                                        <div className="leftContainer">
                                            <div className="imgContainer">
                                                <img src="assets/desktop.png" alt="mobile image" />
                                            </div>
                                            <h2>{data.title}</h2>
                                            <p>{data.desc}</p>
                                            <a href={data.url} target="_blank">See Project</a>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <img src={data.img} alt={data.title} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <img src="assets/arrow.png" className="arrow left" alt="left arrow" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="right arrow" onClick={()=>handleClick()}/>
        </div>
    )
}

export default Works
