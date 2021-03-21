import React, { useState } from 'react';
import Input from '../../components/Input';

// import FilterInput from './FilterInput';
// import SelectHeader from './SelectHeader';
// import StarwarsTable from './StarwarsTable';

function Planets() {
  const [data, setData] = useState({
    nome: 'vivi',
    idade: 37,
  });

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  return (
    <main>
      <Input type="text" name="nome" value={ data.nome } onChange={ handleChange } />
      <Input type="number" name="idade" value={ data.idade } onChange={ handleChange } />

      {/* <FilterInput />
      <SelectHeader />
      <StarwarsTable /> */}
    </main>
  );
}

export default Planets;
