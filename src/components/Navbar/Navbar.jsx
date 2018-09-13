import React from 'react';
import Pagination from './Pagination/Pagination';

const Navbar = props => {
  const { currentPage } = props;
  return (
    <nav className="navbar navbar-light d-flex justify-content-around text-white font-weight-bold bg-info">
      <a className="navbar-brand">PokemonApp</a>
      <Pagination currentPage={currentPage} prevPage={() => props.prevPage()} nextPage={() => props.nextPage()} />
    </nav>
  );
};

export default Navbar;
