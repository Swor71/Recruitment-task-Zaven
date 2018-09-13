import React from 'react';
import './PokemonCard.css';

const PokemonCard = props => {
  const { num, name, img, type, id } = props.pokemon;

  return (
    <li className="card" onClick={() => props.modalToggle(id)}>
      <img className="card-img-top mt-1 card-img-size" src={img} alt="Pokemon" />
      <div className="card-body">
        <h5 className="">{`#${num}`}</h5>
        <h4 className="card-title">{name}</h4>
        <ul className="pokemon-type-list">
          {type.map((type, key) => (
            <li key={key}>
              <span className={`badge mx-1 badge-${type}`}>{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PokemonCard;
