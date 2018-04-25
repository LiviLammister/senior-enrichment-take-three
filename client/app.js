import React       from 'react';
import { connect } from 'react-redux'
import { Route }   from 'react-router-dom';

import {
  CampusList,
  Home,
  Navbar,
  StudentList
} from './components';
import { fetchCampuses } from './store';

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

const mapState = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses)
  }
})