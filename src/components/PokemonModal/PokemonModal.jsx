import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';

class PokemonModal extends React.Component {
  render() {
    const { num, name, candy, weight } = this.props.singlePokemon;
    return (
      <div>
        <Modal isOpen={this.props.modalOpen}>
          <ModalHeader>{`Name ${name}`}</ModalHeader>
          <ModalBody>
            <h5>{`Number: ${num}`}</h5>
            <h5>{`Weight: ${weight}`}</h5>
            <h5>{`Candy: ${candy}`}</h5>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.modalToggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
  singlePokemon: state.singlePokemon
});

export default connect(mapStateToProps)(PokemonModal);
