import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Item,
    Header,
} from 'semantic-ui-react';

import { CampusThumb } from '../index'

const CampusList = (props) => {
    const campuses = props.campuses;
    return (
        <Container text textAlign="center">
            <Header as='h1'>All Campuses</Header>
            <Item.Group>
                {campuses.map(campus =>
                    <CampusThumb
                        key={campus.id}
                        campus={campus}
                    />)}
            </Item.Group>
        </Container>
    );
}


const mapStateToProps = (state) => {
    const newProps = {
        campuses: state.campuses
    }
    return newProps
}

export default connect(mapStateToProps)(CampusList);