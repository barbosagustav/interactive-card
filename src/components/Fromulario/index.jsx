import './Formulario.css'

const Formulario = () => {
    return (
        <>
        <div className="form">
      <form>
        <h3>CARDHOLDER NAME</h3>
        <input placeholder="e.g. Jane Appleseed" type="text" />
        <h3>CARD NUMBER</h3>
        <input placeholder="e.g. 1234 5678 9123 0000" type="number" />
        <div className="display-flex">
          <h3>EXP. DATE (MM/YY)</h3>
          <h3>CVC</h3>
        </div>
        <div className="container-dois">
          <input placeholder="MM" type="number" />
          <input placeholder="YY" type="number" />
          <input placeholder="e.g 123" type="number" />
        </div>
        <button>Confirm</button>
      </form>
    </div>
        
        </>
    )
}

export default Formulario