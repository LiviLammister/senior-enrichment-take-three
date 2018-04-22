import React     from 'react';
import { Route } from 'react-router-dom';

import {
  CampusList,
  Home,
  Navbar,
  StudentList
} from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path='/'         component={Home} />
      <Route exact path='/campuses' component={CampusList} />
      <Route exact path='/students' component={StudentList} />
    </div>
  )
}

export default App;
