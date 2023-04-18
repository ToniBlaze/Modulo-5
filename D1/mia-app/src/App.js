import React from "react";

import Tick from './tick';
import Ciao from './ciao';
import Welcome from './welcome';
import Comment from './comment';

function App() {
  // PASSARE LE PROPS
  const comment = {
    testo: 'Testo a caso',
    autore: {
      name: 'Alessio',
      avatarUrl: 'http://placekitten.com/g/64/64'
    }
  };

  return (
    <div>
      <header>
        <Tick />
        <Ciao name="Alessio" />
        <Welcome />
        <Comment 
        testo={comment.testo}
        autore={comment.autore} />
      </header>
    </div>
  );
}

export default App;
