import axios               from 'axios';
import React, { Component } from 'react';
import {
    Container,
    Divider,
    Item,
    Header,
} from 'semantic-ui-react';

import { CampusThumb } from '../index';
import store, { getCampuses } from '../store';

export default class CampusList extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount () {
        this.unsubscribe = store.subscribe(() => {this.setState(store.getState())});
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => {store.dispatch(getCampuses(campuses))});
    }

    componentWillUnmount () {
        this.unsubscribe();
    }

    render() {
        const campuses = this.state.campuses;
        if (!campuses) return <div />
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
}



