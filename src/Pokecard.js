import './Pokecard.css';

const Pokecard = ({id, name, type, exp}) => {
    return (
        <div className="col">
            <div className="card h-100">
                <div className='card-img'>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/ca5a7886c10753144e6fae3b69d45a4d42a449b4/sprites/pokemon/other/showdown/${id}.gif`} className="card-img-top" alt="pokemon"/>
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{name} <img className="Pokecard-type" src={type} alt="pokemon type"/></h5>
                    <p className="card-text">Base exp. {exp}</p>
                </div>
            </div>
        </div>
    )
}

export default Pokecard;