import './App.css';
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Cards from './components/Cards';
import Sucesso from './components/SessaoSucesso';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });

  const [containerUmVisivel, setContainerUmVisivel] = useState(true);
  const [containerDoisVisivel, setContainerDoisVisivel] = useState(false);

  const submit = evento => {
    evento.preventDefault();
  }

  const handleClick = () => {
    setContainerUmVisivel(!containerUmVisivel);
    setContainerDoisVisivel(!containerDoisVisivel);
  }

  const recarregarPagina = () => {
    window.location.reload();
  }

  const handleChange = evento => {
    const { name, value } = evento.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>

      <Cards
        number={formData.number}
        nome={formData.nome}
        month={formData.month}
        year={formData.year}
        cvc={formData.cvc}
      />

      <Formulario
        nome={formData.nome}
        number={formData.number}
        month={formData.month}
        year={formData.year}
        cvc={formData.cvc}
        handleChange={handleChange}
        handleClick={handleClick}
        containerUmVisivel={containerUmVisivel}
        submit={submit}
      />

      < Sucesso
        containerDoisVisivel={containerDoisVisivel}
        recarregarPagina={recarregarPagina}
      />

    </>
  );
}

export default App;
