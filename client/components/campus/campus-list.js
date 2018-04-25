import React, { Component } from 'react';
import {
    Container,
    Header
} from 'semantic-ui-react';

import { CampusThumb } from '../index'

const CampusList = () => {
    return (
        <Container text textAlign="center">
            <Header as='h1'>All Campuses</Header>
            <CampusThumb />
        </Container>
    );
}

export default CampusList;
