import React from 'react'
import './testimonial.scss';
import { testData } from '../../data';

function Testimonials() {
    console.log(testData)
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {
                    testData.map((data) => {
                        return (
                            <div className={data.featured ? 'card featured' : 'card'} key={data.id}>
                            <div className="top">
                                <img src="assets/right-arrow.png" className="left" alt="" />
                                <img src={data.img} className="user" alt="" />
                                <img src="assets/youtube.png" className="right" alt="" />
                            </div>
                            <div className="center">
                                <p>{data.desc}</p>
                            </div>
                            <div className="bottom">
                                <h3>{data.name}</h3>
                                <h4>{data.ceo}</h4>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Testimonials
