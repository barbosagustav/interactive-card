import './SessaoSucesso.css';
import React from 'react';

function SessaoSucesso({containerDoisVisivel, recarregarPagina}) {
    return (
        <div className="sucesso" style={{ display: containerDoisVisivel ? 'block' : 'none' }}>
            <img src="./src/images/icon-complete.svg" alt=""/>
            <h2>Thank You</h2>
            <h5>We've added your cards details </h5>
            <button className='buttonsecesso' onClick={recarregarPagina} >Continue</button>
        </div>
    )
}

export default SessaoSucesso