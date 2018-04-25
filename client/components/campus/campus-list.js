import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header
} from 'semantic-ui-react';

import { CampusThumb } from '../index'

const CampusList = (props) => {
    const campuses = props.campuses;
    console.log('campuses: ', campuses)
    return (
        <Container text textAlign="center">
            <Header as='h1'>All Campuses</Header>
            <CampusThumb />
        </Container>
    );
}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        campuses: state.campuses
    }
}

export default connect(mapStateToProps)(CampusList);