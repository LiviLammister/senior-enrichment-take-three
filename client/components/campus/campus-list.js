import React, { Component } from 'react';
import { 
    Container,
    Header
} from 'semantic-ui-react';

class CampusList extends Component {
    render() {
        return (
            <Container text textAlign="center">
                <Header as='h1'>All Campuses</Header>
                {/* <List.item> */}
            </Container>
        );
    }
}

export default CampusList;