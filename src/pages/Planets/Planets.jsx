import React from 'react';

import FilterInput from './FilterInput';
import SelectHeader from './SelectHeader';
import StarwarsTable from './StarwarsTable';

function Planets() {
  return (
    <>
      <FilterInput />
      <SelectHeader />
      <StarwarsTable />
    </>
  );
}

export default Planets;
