import React, { Component } from 'react';
import { Route }            from 'react-router-dom';

import {
  Navbar,
  CampusList
} from './components';

const App = () => {
    return (
      <div>
        <Navbar />
        <Route exact path='/campuses/' component={CampusList} />
      </div>
    );
}

export default App;