import pokemon from './Pokemon';
import Pokecard from './Pokecard';
import './Pokedex.css';

const Pokedex = () => {

    return (
        <div className='row row-cols-2 row-cols-md-4 g-4 Pokedex'>
            {pokemon.map((el) => {
                return (
                    <Pokecard key={el.id} id={el.id} name={el.name} type={el.type} exp={el.base_experience} />
                )
            })}
        </div>
    )
}

export default Pokedex;