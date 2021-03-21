import React from 'react';

import StarwarsProvider from './context/StarwarsProvider';
import Planets from './pages/Planets';

function App() {
  return (
    <StarwarsProvider>
      <Planets />
    </StarwarsProvider>
  );
}

export default App;
