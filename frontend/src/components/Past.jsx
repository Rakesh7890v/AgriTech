import React from 'react';
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.jpg';
import event4 from '../assets/images/event4.jpg';
import event5 from '../assets/images/event5.jpg';
import event6 from '../assets/images/event6.jpg';

const Past = () => {

    const images = [
        event1, event2, event3, event4, event5, event6
    ]

  return (
    <div className="event-container">
        <h1>AGRI <span>TECH</span> 1<span>.</span>0</h1>
        <p>Agritech 1.0 is the 24 hour Hackathon, marked a new milestone by integrating technology with agriculture.  As gathering engineers for Networking and innovation creators for different ideas in agriculture. This event fostered collaboration, creativity, and problem-solving to drive the future of agritech.</p>
        <div className="image-grid-container">
            {images.map((image, index) => (
            <div key={index} className="image-item">
                <img src={image} alt={`Image ${index + 1}`} />
            </div>
            ))}
        </div>
    </div>
  )
}

export default Past