import './Formulario.css';
import App from '../../App';

function Formulario({ nome, number, month, year, cvc, handleChange, handleClick, containerUmVisivel,submit}) {
  return (
    <div className="form" style={{ display: containerUmVisivel ? 'block' : 'none' }} onSubmit={submit}>
      <form  >
        <h3>CARDHOLDER NAME</h3>
        <input
          placeholder="e.g. Jane Appleseed"
          type="text"
          name="nome"
          value={nome}
          onChange={handleChange}
          required
        />
        <h3>CARD NUMBER</h3>
        <input
          placeholder="e.g. 1234 5678 9123 0000"
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
          required
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
            required
          />
          <input
            placeholder="YY"
            type="number"
            name="year"
            value={year}
            onChange={handleChange}
            required
          />
          <input placeholder="e.g 123"
            type="number"
            name="cvc"
            value={cvc}
            onChange={handleChange} />
        </div>
        <button onClick={handleClick}>Confirm</button>
      </form>
    </div>
  );
}

export default Formulario;

