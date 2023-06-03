import './App.css';
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Cards from './components/Cards';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });

  const handleChange = evento => {
    const { name, value } = evento.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="container"></div>
      <Cards
        number={formData.number}
        nome={formData.nome}
        month={formData.month}
        year={formData.year}
        cvc={formData.cvc}
      />
      <div className="form">
        <Formulario
          nome={formData.nome}
          number={formData.number}
          month={formData.month}
          year={formData.year}
          cvc={formData.cvc}
          handleChange={handleChange}
        />
      </div>
    </>
  );
}

export default App;
