import React, { useEffect, useState, useRef } from 'react'; import pin from '../assets/images/pin.png'; import green1 from '../assets/images/green1.png'; import green2 from '../assets/images/green2.png'; import green3 from '../assets/images/green3.png';

const MovingLeaf = ({ src, initialX, initialY, delay, duration, containerRef }) => { 
  const [position, setPosition] = useState({ x: initialX, y: initialY }); 
  const [rotation, setRotation] = useState(0); const animationRef = useRef(null);
  useEffect(() => { 
    if (!containerRef.current) 
      return; 
    const containerHeight = containerRef.current.getBoundingClientRect().height;
    const animationTimeout = setTimeout(() => { 
      const startTime = Date.now();
      const animateLeaf = () => { 
        const elapsed = Date.now() - startTime; 
        const progress = (elapsed % duration) / duration;
        const newY = initialY + progress * (containerHeight + 300); 
        const newX = initialX + Math.sin(progress * Math.PI * 2) * 30; 
        const newRotation = Math.sin(progress * Math.PI * 3) * 15;
        setPosition({ x: newX, y: newY >= containerHeight + 200 ? -150 : newY }); 
        setRotation(newRotation);
        animationRef.current = requestAnimationFrame(animateLeaf); 
      };
      animationRef.current = requestAnimationFrame(animateLeaf);
    }, delay);
    return () => { clearTimeout(animationTimeout); 
      if (animationRef.current) { 
        cancelAnimationFrame(animationRef.current); 
      } 
    }; 
  }, [containerRef, initialX, initialY, delay, duration]);

  return (
    <img src={src} alt="Falling leaf" style={{ position: 'absolute', left: `${position.x}px`, top: `${position.y}px`, width: '180px', height: '180px', transform: `rotate(${rotation}deg)`, zIndex: 5, pointerEvents: 'none', opacity: 0.9, filter: 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.15))' }} />
  ); };

const GuidelinesSection = () => { 
  const containerRef = useRef(null); 
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => { 
    const updateDimensions = () => { 
      if (containerRef.current) { 
        const { width, height } = containerRef.current.getBoundingClientRect(); 
        setContainerDimensions({ width, height }); 
      } 
    };
    updateDimensions(); window.addEventListener('resize', updateDimensions);
    return () => { window.removeEventListener('resize', updateDimensions); }; }, []);
  
    const guidelines = [ 
      "Each team must be consisting of 3 students.", 
      "Team in Hackathon can comprise members from the II and III years.", 
      "A team can have participants from different departments.", 
      "Single registration is enough for the entire team.", 
      "Same team can submit multiple ideas and member of a team should not be in any other team.", 
      "Teams can choose their own problem statement and will be shortlisted based on the innovation ideas.", 
      "Hardware requirements will not be provided." 
    ];
  
  return (<div className="guidelines-container"> <h1>Guide<span>lines</span></h1> <div className="guide-animate" ref={containerRef}> <div className="leaves-container">
          <MovingLeaf src={green1} initialX={50} initialY={-250} delay={0} duration={15000} containerRef={containerRef} />
          <MovingLeaf src={green2} initialX={Math.max(300, containerDimensions.width / 2 - 125)} initialY={-250} delay={3000} duration={18000} containerRef={containerRef} />
          <MovingLeaf src={green3} initialX={Math.max(100, containerDimensions.width - 300)} initialY={-250} delay={7000} duration={12000} containerRef={containerRef} />
          <MovingLeaf src={green1} initialX={Math.min(containerDimensions.width - 200, containerDimensions.width * 0.75)} initialY={-250} delay={5000} duration={16000} containerRef={containerRef} />
        </div>
        <div className="guides"> {guidelines.map((text, index) => (<div className="guide" key={index} style={{ '--index': index }}> <img src={pin} alt="" /> <p>{text}</p> </div>))} </div>
      </div> </div>); };

export default GuidelinesSection;