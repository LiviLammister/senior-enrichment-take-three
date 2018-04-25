import React, { Component } from 'react';
import { connect }          from 'react-redux'
import { Route }            from 'react-router-dom';

import {
  CampusList,
  Home,
  Navbar,
  StudentList
} from './components';

import { 
  fetchCampuses,
  fetchStudents,
 } from './store';

class App extends Component {

  componentDidMount() {
    this.props.fetchInitialData()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route exact path='/'         component={Home} />
        <Route exact path='/campuses' component={CampusList} />
        <Route exact path='/students' component={StudentList} />
      </div>
    )
  }
}

const mapState = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses())
    dispatch(fetchStudents())
  }
})

export default connect(mapState, mapDispatch)(App);