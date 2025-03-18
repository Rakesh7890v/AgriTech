import React, {useState, useEffect, useRef} from 'react'

const TimeLine = () => {
    const containerRef = React.useRef(null);
    const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        if (!containerRef.current) return;
        
        const updateDimensions = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setContainerDimensions({ width, height });
            }
        };
        
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        
        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const timelineElement = timelineRef.current;
            const timelineTop = timelineElement.offsetTop;
            const timelineHeight = timelineElement.offsetHeight;
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;

            const scrollStart = timelineTop - windowHeight;
            const scrollEnd = timelineTop + timelineHeight;
            const scrollRange = scrollEnd - scrollStart;

            let progress = (scrollPosition - scrollStart) / scrollRange;
            progress = Math.max(0, Math.min(1, progress));

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const events = [
        { date: "MARCH 17, 2025", title: "Registration Starts", description: "Registration for the Agritech2.0 Hackathon will be open for all participants." },
        { date: "MARCH 21, 2025", title: "Registration Ends", description: "Don't miss your chance to participate and showcase your skills. The last date to register is March 21. Sign up today and be part of the event." },
        { date: "MARCH 22, 2025", title: "Evaluation and Shortlisting", description: "Each team will be shortlisted based on their abstract." },
        { date: "MARCH 22, 2025", title: "Declaration of Selected Teams", description: "The selected teams for Agritech2.0 will be announced." },
        { date: "MARCH 25-26, 2025", title: "The Main Event", description: "Intensive 24-hour Hackathon will be conducted on March 25 and 26." }
    ];

  return (
    <div id="timeline" className="timeline-container" ref={timelineRef}>
        <h1 className="timeline-header">EVENT <span>TIMELINE</span></h1>
        <div className="timeline">
            <div className="timeline-background"></div>
            <div className="timeline-progress" style={{ height: `${scrollProgress * 90}%` }}></div>
            {events.map((event, index) => {
                const eventPosition = index / (events.length - 1);
                const isReached = scrollProgress >= eventPosition;

                return (
                    <div key={index} className="timeline-event">
                        <div className={`timeline-circle ${isReached ? 'reached' : ''}`}></div>
                        <div className="timeline-content">
                            <div className="timeline-date">{event.date}</div>
                            <h3 className="timeline-title">{event.title}</h3>
                            <p className="timeline-description">{event.description}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default TimeLine