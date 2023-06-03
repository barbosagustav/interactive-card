import './Formulario.css';
import React from 'react';

function Formulario({ nome, number, month, year, cvc, handleChange }) {
  return (
    <form>
      <h3>CARDHOLDER NAME</h3>
      <input
        placeholder="e.g. Jane Appleseed"
        type="text"
        name="nome"
        value={nome}
        onChange={handleChange}
      />
      <h3>CARD NUMBER</h3>
      <input
        placeholder="e.g. 1234 5678 9123 0000"
        type="number"
        name="number"
        value={number}
        onChange={handleChange}
      />
      <div className="display-flex">
        <h3>EXP. DATE (MM/YY)</h3>
        <h3>CVC</h3>
      </div>
      <div className="container-dois">
        <input
          placeholder="MM"
          type="number"
          name="month"
          value={month}
          onChange={handleChange}
        />
        <input
          placeholder="YY"
          type="number"
          name="year"
          value={year}
          onChange={handleChange}
        />
        <input placeholder="e.g 123" 
        type="number"
        name="cvc"
        value={cvc}
        onChange={handleChange} />
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Formulario;

