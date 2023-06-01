import './cards.css'

const Cards = () => {
    return (
        <div className="cards">
            <div className="card-back">
                <img src="./src/images/bg-card-back.png" alt="Card Back" />
            </div>
            <div className="card-front">
                <img src="./src/images/bg-card-front.png" alt="Card Front" />
                <h3>0000 0000 0000 0000</h3>
                <div className="display-flex">
                    <div className="name">Nome</div>
                    <div className="exp-date">00/00</div>
                </div>
            </div>
        </div>
    )
}

export default Cards