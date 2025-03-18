import React, { useState } from 'react';

const FAQSection = () => {
  const faqs = [
    { question: "Who can participate in Agritech 2.0?", answer: "Agritech 2.0 is an intra-college hackathon open to II and III year students from all departments at Kongunadu College of Engineering and Technology." },
    { question: "What should we bring to the hackathon?", answer: "Participants should bring their hardware components for their project. Hardware requirements will not be provided by the organizers." },
    { question: "How will teams be evaluated?", answer: "Teams will be evaluated based on innovation, technical complexity, practicality of implementation, potential impact on agriculture, and presentation quality by a panel of industry experts." },
    { question: "Can we start working on our project before the hackathon?", answer: "No, all development work must be done during the 24-hour hackathon period. However, teams can research and conceptualize ideas before the event." },
    { question: "Will food and refreshments be provided?", answer: "Yes, meals and refreshments will be provided throughout the 24-hour hackathon period." }
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => { setActiveIndex(activeIndex === index ? null : index); };

  return (
    <div className="faq-container">
      <h1 className="faq-header">Frequently <span>Asked</span> Questions</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className={`faq-item ${activeIndex === index ? 'active' : ''}`} key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{faq.question}</h3>
              <div className="faq-icon">
                <div className="icon-plus"></div>
                <div className="icon-minus"></div>
              </div>
            </div>
            <div className="faq-answer"><p>{faq.answer}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;