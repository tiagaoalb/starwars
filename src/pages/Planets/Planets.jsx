import React, { useState, useEffect } from 'react';
// import Input from '../../components/Input';

import FilterInput from './FilterInput';
import SelectHeader from './SelectHeader';
import StarwarsTable from './StarwarsTable';

function Planets() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((data) => setPlanets(data.results));
  }, []);

  const planetFilter = () => planets;

  return (
    <main>
      {/* <FilterInput />
      <SelectHeader /> */}
      <StarwarsTable planets={ planetFilter() } />
    </main>
  );
}

export default Planets;
