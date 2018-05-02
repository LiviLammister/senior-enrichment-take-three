import React    from 'react';
import { Link } from 'react-router-dom';
import {
    Item,
} from 'semantic-ui-react';

const CampusThumb = (props) => {
    const campus = props.campus;
    return (
        <Item>
            <Item.Image
                as={Link} to={`/campuses/${campus.id}`}
                campus={campus}
                size="tiny"
                src={campus.imageUrl}
            />
            <Item.Content>
                <Item.Header>{campus.name}</Item.Header>
                <Item.Description>{campus.description}</Item.Description>
            </Item.Content>
        </Item>
    );
}

export default CampusThumb;
