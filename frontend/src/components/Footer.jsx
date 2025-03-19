import React from 'react';
import logo from '../assets/images/logo.png'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="coordinators-section">
                    <div className="staff-coordinators">
                    <h3>STAFF CO-ORDINATORS</h3>
                    <ul>
                        <li><span className="name">Mr. Satheesh Kumar. S</span>, M.E. - <span className="phone">8489715566</span></li>
                        <li><span className="name">Ms. Veera Karunya .G</span>, M.Tech. - <span className="phone">9600962704</span></li>
                        <li><span className="name">Ms. Bhavadharani .B</span>, M.E. - <span className="phone">9597223126</span></li>
                    </ul>
                    </div>
                    <div className="student-coordinators">
                    <h3>STUDENT CO-ORDINATORS</h3>
                    <ul>
                        <li><span className="name">Christopher. S</span>, III Year - <span className="phone">8220083222</span></li>
                        <li><span className="name">Manashwini. M Y</span>, II Year - <span className="phone">8667444368</span></li>
                    </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer;