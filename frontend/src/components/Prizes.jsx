import React from 'react';
import first from '../assets/images/first.png';
import second from '../assets/images/second.png';
import third from '../assets/images/third.png';

const Prizes = () => {
    const prizes = [
        {
            id: 1,
            name: 'Prize',
            img: first,
            cash: 3000
        },
        {
            id: 2,
            name: 'Prize',
            img: first,
            cash: 3000
        },{
            id: 3,
            name: 'Prize',
            img: first,
            cash: 3000
        }
    ];

    
  return (
       <div id="prizes" className="cash-container">
            <h1>Thrilling <span>Rewards</span></h1>
            <p>The top team in each of the three domains will receive a cash prize of Rupees 3,000.</p>
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