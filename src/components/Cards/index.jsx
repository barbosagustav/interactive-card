import './cards.css';
import React from 'react';

function Cards({ number, nome, month, year, cvc }) {
  return (
    <>
      <div className="container"></div>
      <div className="cards">
        <div className="card-back">
          <img src="../src/img/bg-card-back.png" alt="Card Back" />
          <div className="cvc">{cvc}</div>
        </div>
        <div className="card-front">
          <img src="../src/img/bg-card-front.png" alt="Card Front" />
          <h3 className='number'>{number}</h3>
          <div className="display-flex">
            <div className="name">{nome}</div>
            <div className="exp-date">{month} {year}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
