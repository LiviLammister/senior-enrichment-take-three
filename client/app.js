import React     from 'react';
import { Route } from 'react-router-dom';

import {
  AllCampuses,
  Navbar
} from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path='/campuses' component={AllCampuses} />
    </div>
  )
}

export default App;
