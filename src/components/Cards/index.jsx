import './cards.css';
import React from 'react';

function Cards({ number, nome, month, year, cvc }) {
  return (
    <>
      <div className="container"></div>
      <div className="cards">
        <div className="card-back">
      <img src="./src/assets/img/bg-card-back.png" alt="Parte de trás do cartão"/>
          <div className="cvc">{cvc}</div>
        </div>
        <div className="card-front">
        <img src="./src/assets/img/bg-card-front.png" alt="Frente do Cartão"/>
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
