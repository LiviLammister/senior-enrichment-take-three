import React from 'react';
import {
    Item,
} from 'semantic-ui-react';

const CampusThumb = (props) => {
    const campus = props.campus;
    return (
        <Item>
            <Item.Image
                size="tiny"
                src={campus.imageUrl}
            />
            <Item.Content>
                <Item.Header>{campus.name}</Item.Header>
                <Item.Description>{campus.description}</Item.Description>
            </Item.Content>
        </Item>
    )
}



export default CampusThumb;