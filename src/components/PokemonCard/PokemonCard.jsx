import React from 'react';

import './PokemonCard.css';

const PokemonCard = props => {
  const { num, name, img, type } = props.pokemon;

  return (
    <li className="card">
      <img className="card-img-top card-size" src={img} alt="Pokemon" />
      <div className="card-body">
        <h5 className="card-title m-2">{`#${num} ${name}`}</h5>
        <ul className="pokemon-type-list">
          {type.map((type, key) => {
            let classes = 'badge m-2 badge-';
            switch (type) {
              case 'Poison':
                classes += 'poison';
                break;
              case 'Grass':
                classes += 'success';
                break;
              case 'Fire':
                classes += 'danger';
                break;
              default:
                break;
            }
            return (
              <li key={key} className="pokemon-attribute">
                <span className={classes}>{type}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

export default PokemonCard;
