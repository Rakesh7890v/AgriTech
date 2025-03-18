import React from 'react';
import first from '../assets/images/first.png';
import second from '../assets/images/second.png';
import third from '../assets/images/third.png';

const Prizes = () => {
    const prizes = [
        {
            id: 1,
            name: 'First Prize',
            img: first,
            cash: 5000
        },
        {
            id: 2,
            name: 'Second Prize',
            img: second,
            cash: 3000
        },{
            id: 3,
            name: 'Third Prize',
            img: third,
            cash: 2000
        }
    ];

    
  return (
       <div id="prizes" className="cash-container">
            <h1>Thrilling <span>Rewards</span></h1>
            <p>Industry experts will select the top three teams to win Rupees 10,000 in prizes.</p>
            <div className="cash-cards">
                {prizes.map(prize => (
                    <div className="cash" key={prize.id}>
                        <h2>{prize.name}</h2>
                        <img src={prize.img} alt="" />
                        <h2>₹ {prize.cash}</h2>
                        <div className="scratch-layer"></div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Prizes