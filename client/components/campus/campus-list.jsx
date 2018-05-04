import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Item,
    Header,
} from 'semantic-ui-react';

import {CampusThumb} from '../index.js';

const CampusList = (props) => {
    const campuses = props.campuses;
    if (!campuses) return (<div />)
    return (
        <Container text>
            <Header as="h1">
                All Campuses
                <Button
                    as={Link} to="/campuses/add"
                    content="Add Campus"
                    floated="right"
                />
            </Header>
            <Divider />
            <Item.Group divided>
                {campuses.map(campus =>
                    <CampusThumb key={campus.id} campus={campus} />)}
            </Item.Group>
        </Container>
    );
}

const mapStateToProps = ({campuses}) => ({campuses})

export default connect(mapStateToProps)(CampusList);
