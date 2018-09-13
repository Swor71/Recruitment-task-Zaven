import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

import '../PokemonCard/PokemonCard.css';

class PokemonModal extends React.Component {
  render() {
    if (this.props.singlePokemon) {
      const {
        num,
        name,
        candy,
        weight,
        height,
        type,
        egg,
        spawn_chance,
        spawn_time,
        weaknesses,
        img
      } = this.props.singlePokemon;

      return (
        <div>
          <Modal isOpen={this.props.modalOpen}>
            <ModalHeader className="justify-content-center">
              <h3>{name}</h3>
            </ModalHeader>
            <ModalBody className="d-flex justify-content-around px-2">
              <div className="d-flex align-items-center">
                <img
                  className="d-flex justify-content-center align-items-center"
                  src={img}
                  style={{ width: '200px', height: '200px' }}
                  alt="Pokemon"
                />
              </div>
              <div>
                <h5>{`Number: ${num}`}</h5>
                <div className="d-flex">
                  <h5>{`Type: `}</h5>
                  <ul className="list-unstyled mb-0 pl-2 d-flex">
                    {type.map((type, key) => (
                      <li key={key}>
                        <span className={`badge mx-1 badge-${type}`}>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <h5>{`Height: ${height}`}</h5>
                <h5>{`Weight: ${weight}`}</h5>
                <h5>{`Candy: ${candy}`}</h5>
                <h5>{`Egg: ${egg}`}</h5>
                <h5>{`Spawn chance: ${spawn_chance}%`}</h5>
                <h5>{`Spawn time: ${spawn_time} min`}</h5>
                <h5>{`Weaknesses: `}</h5>
                <ul className="pokemon-type-list">
                  {weaknesses.map((type, key) => (
                    <li key={key}>
                      <span className={`badge mx-1 badge-${type}`}>{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="info" onClick={() => this.props.modalToggle()}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  singlePokemon: state.singlePokemon[0]
});

export default connect(mapStateToProps)(PokemonModal);
