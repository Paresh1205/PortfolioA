import React from 'react'
import './topbar.scss';
import logoImg from '../../PKLogo.PNG';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Topbar({menuOpen,setMenuOpen}) {

    return (
        <div className={"topbar " + (menuOpen && 'active' )}  >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src={logoImg} alt="" />
                    </a>
                    <div className="detail phone">
                        <a href="callto:+91 8975103979">
                            <PhoneIcon />
                            <span>+91 8975103979</span>
                        </a>
                    </div>
                    <div className="detail mail">
                        <a href="mailto:shankar.korani@gmail.com" target="_blank">
                            <MailIcon />
                            <span>shankar.korani@gmail.com</span>
                        </a>
                    </div>
                    <div className="detail linkin">
                        <a href="https://www.linkedin.com/in/paresh-korani" target="_blank">
                            <LinkedInIcon />
                            <span>linkedin.com/in/paresh-korani</span>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
