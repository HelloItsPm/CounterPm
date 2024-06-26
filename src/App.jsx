import React from 'react';
//Import du chemin vers le conponent Counter qui contient mon compteur.
import Counter from './Components/Counter/Counter.jsx';

// J'appelle mon compteur nommé Counter pour qu'il s'affiche.
const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;
