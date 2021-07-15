import React,{useState} from 'react';
import { useEffect } from 'react';
import './portfolio.scss'
import PortfolioList from './PortfolioList';
import {featuredPortfolio,
    contentPortfolio,
    designPortfolio,
    mobilePortfolio,
    webPortfolio} from '../../data'

function Portfolio() {
    const [selected,setSelected]=useState("featured");
    const [data,setData] = useState([]);

    useEffect(()=>{
        switch(selected){
            case "featured":
                setData(featuredPortfolio)
                break;
            case "web":
                setData(webPortfolio)
                break;
            case "mobile":
                setData(mobilePortfolio);
                break;
            case "design":
                setData(designPortfolio)
                break;
            case "brand":
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio)
                break;
        }
    },[selected])

    const List=[
        {
            id:"featured",
            title:"Featured"
        },
        {
            id:"web",
            title:"Web App"
        },
        {
            id:"mobile",
            title:"Mobile App"
        },
        {
            id:"design",
            title:"Designing"
        },
        {
            id:"brand",
            title:"Branding"
        }

    ]
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {List.map((item)=>{
                    return <PortfolioList key={item.id} id={item.id} 
                            title={item.title} 
                            active={selected === item.id} 
                            setSelected={setSelected} />
                })}
            </ul>

            <div className="container">
                {
                    data.map(dt=>{
                        return <div className="item" key={dt.id}>
                            <img src={dt.img} alt="" ></img>
                            <h3><a href={dt.url} target="_blank">{dt.title}</a></h3>
                        </div>
                    })
                }
                
               
            </div>
        </div>
    )
}

export default Portfolio
