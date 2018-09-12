import React from 'react';
import './PokemonCard.css';

const PokemonCard = props => {
  const { num, name, img, type } = props.pokemon;

  return (
    <li className="card">
      <img className="card-img-top card-img-size" src={img} alt="Pokemon" />
      <div className="card-body">
        <h5 className="card-title m-2">{`#${num} ${name}`}</h5>
        <ul className="pokemon-type-list">
          {type.map((type, key) => (
            <li key={key} className="pokemon-attribute">
              <span className={`badge m-2 badge-${type}`}>{type}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PokemonCard;
