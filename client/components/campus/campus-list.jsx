import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
    Button,
    Container,
    Divider,
    Item,
    Header,
} from 'semantic-ui-react';

import CampusThumb from '../index';

const CampusList = (props) => {
    const campuses = props.campuses;
    if (!campuses) return <h1>hello</h1>
    return (
        <Container text>
            <Header as='h1'>
                All Campuses
                    <Button
                    content="Add Campus"
                    floated="right"
                />
            </Header>
            <Divider />
            <Item.Group divided>
                {/* {campuses.map(campus =>
                    <CampusThumb
                        key={campus.id}
                        campus={campus}
                    />)} */}
            </Item.Group>
        </Container>
    );
}

const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {
        campuses : state.campues
    }
}

export default connect(mapStateToProps)(CampusList);