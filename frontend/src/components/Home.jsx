import React, { useEffect, useState, useRef } from 'react';
import bg from '../assets/bg.mp4';
import flower from '../assets/images/flower.png';
import GuidelinesSection from './GuidelineSection';
import FAQSection from './FAQSection';
import Footer from './Footer';
import Header from './Header';
import TimeLine from './TimeLine';
import Prizes from './Prizes';
import Past from './Past';

const FallingFlower = ({ id, posX, posY, onAnimationEnd }) => {
  return (
    <div className="falling-flower" style={{ left: posX, top: posY }}onAnimationEnd={onAnimationEnd}>
      <img src={flower} alt="" />
    </div>
  );
};

const WelcomeSplash = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <div className="welcome-splash">
      <div className="welcome-content">
        <h1>WELCOME TO</h1>
        <h1 className="welcome-title">AGRI<span>TECH</span> 2<span>.</span>0</h1>
      </div>
    </div>
  );
};

const Home = () => {
    const [showSplash, setShowSplash] = useState(true);
    const [flowers, setFlowers] = useState([]);
    
    const handleSplashComplete = () => {
        setShowSplash(false);
    };
    
    const handleFlowerClick = (e) => {
        const newFlower = {
            id: Date.now(),
            posX: e.clientX,
            posY: e.clientY
        };
        
        setFlowers(prevFlowers => [...prevFlowers, newFlower]);
    };
    
    const removeFlower = (id) => {
        setFlowers(prevFlowers => prevFlowers.filter(flower => flower.id !== id));
    };
    
    if (showSplash) {
        return <WelcomeSplash onComplete={handleSplashComplete} />;
    }
    
    return (
        <div onClick={handleFlowerClick}>
            {flowers.map(flower => (
                <FallingFlower key={flower.id} id={flower.id} posX={flower.posX} posY={flower.posY} onAnimationEnd={() => removeFlower(flower.id)}/>
            ))}

            <div id="home" className='homepage-container'>
                <Header />
                <video src={bg} className="w-full h-full object-cover" autoPlay loop muted playsInline ></video>            
                <div className="home-container">
                    <h1>AGRI<span>TECH</span> 2<span>.</span>0</h1>
                    <p>An Intra-college, 24 hours Hackathon by the Department of Agricultural Engineering at Kongunadu college of Engineering and Technology. Agritech2.0 brings technology and agriculture together, empowering innovators to revolutionize farming with AI, IoT, and smart solutions. Join us to cultivate ideas and drive the future of agritech!</p>
                    <button className="button" onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfwVPwTUJ9HwiJ29QlEAXj_kNR-eok8pk8A0hFHZwGPVHmutA/viewform', '_blank')}></button>
                </div>
            </div>       

            <div id="pastEvent">
              <Past />
            </div>

            <div id="prizes">
              <Prizes />
            </div> 

            <div id="timeline">
              <TimeLine />
            </div>            

            <div id="guidelines">
                <GuidelinesSection />
            </div>
            
            <div id="faq">
                <FAQSection />
            </div>
            
            <div id="contact">
                <Footer />
            </div>
        </div>
    );
};

export default Home;