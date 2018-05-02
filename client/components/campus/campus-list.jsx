import React, { Component } from 'react';

import {
    Button,
    Container,
    Divider,
    Item,
    Header,
} from 'semantic-ui-react';

const CampusList = (props) => {

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

export default CampusList;