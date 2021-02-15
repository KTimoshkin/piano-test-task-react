import React from 'react';
import './assets/sass/main.sass';

import { BrowserRouter } from 'react-router-dom';

import MainRoute from './routes/MainRoute';

function App() {
  return (
    <div>
        <BrowserRouter>
            <MainRoute />
        </BrowserRouter>
    </div>
  );
}

export default App;
