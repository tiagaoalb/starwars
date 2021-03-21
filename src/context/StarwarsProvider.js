import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarwarsContext from './StarwarsContext';
import Planets from '../pages/Planets';

const filterFields = [

];

/*
  Tipos de Filtro?
  Texto / Numero

*/

// const searchALA = [
//   {
//     type: 'text',
//     value: 'naboo',
//     option: '',
//   },
//   {
//     type: 'number',
//     value: 1000,
//     param: 'population',
//     option: '>',
//   },
//   {
//     type: 'number',
//     value: 222000,
//     param: 'diameter',
//     option: '<',
//   },
// ];

export default function StarwarsProvider({ children }) {
  const [searchText, setSearchText] = useState('');
  const [searchNumber, setSearchNumber] = useState([]);

  const context = {
    setTables,
  };

  return (
    <StarwarsContext.Provider value={ context }>
      { children }
    </StarwarsContext.Provider>
  );
}

StarwarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
