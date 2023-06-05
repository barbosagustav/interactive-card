import './SessaoSucesso.css';
import React from 'react';

function SessaoSucesso({ containerDoisVisivel, recarregarPagina }) {
    return (
        <div className="sucesso" style={{ display: containerDoisVisivel ? 'block' : 'none' }}>
            <img src="./src/assets/img/icon-complete.svg" alt="Sinal de sucesso"/>
                <h2>Thank You</h2>
                <h5>We've added your cards details </h5>
                <button className='buttonsecesso' onClick={recarregarPagina} >Continue</button>
        </div>
    )
}

export default SessaoSucesso