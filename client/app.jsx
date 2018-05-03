import React, { Component } from 'react';
import { Route, Switch }    from 'react-router-dom';
import { connect }          from 'react-redux';

import { fetchCampuses } from './redux/campuses';
import { fetchStudents } from './redux/students';
 

import {
  AddCampus,
  EditCampus,
  Navbar,
  CampusList
} from './components';

class App extends Component {
  componentDidMount() {
		this.props.fetchInitialData();
  }
  
  render () {
    return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/campuses/"    component={CampusList} />
        <Route exact path="/campuses/add" component={AddCampus} />
        <Route exact path="/campuses/:id" component={EditCampus} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = null;

const mapDispatch = dispatch => ({
  fetchInitialData: () => {
    dispatch(fetchCampuses());
    dispatch(fetchStudents());
  }
});

export default connect(mapStateToProps, mapDispatch)(App);