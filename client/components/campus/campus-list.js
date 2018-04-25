import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Divider,
    Item,
    Header,
} from 'semantic-ui-react';

import { CampusThumb } from '../index'

const CampusList = (props) => {
    const campuses = props.campuses;
    return (
        <Container text>
            <Header
                as='h1'
                textAlign="center">
                All Campuses
            </Header>
            <Divider />
            <Item.Group divided>
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