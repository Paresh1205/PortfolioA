import React from 'react'
import './intro.scss'
import {init} from 'ityped'
import { useEffect,useRef } from 'react'

function Intro() {
    const textRef=useRef();
    
    useEffect(()=>{
        console.log(textRef)
        init(textRef.current, { showCursor: true,typeSpeed:150,backDelay:1500,backSpeed:100, strings: ['Front End', 'UI', 'React' ] })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/paresh.jpg"  alt="myself" />
                </div>
                
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Paresh Korani</h1>
                    <h3><span ref={textRef}></span> Developer</h3>
                    <a href="#portfolio">
                        <img src="assets/down.png" alt="down-arrow" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro
