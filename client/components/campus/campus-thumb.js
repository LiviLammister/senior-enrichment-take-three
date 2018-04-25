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
            <Item.Header>{campus.name}</Item.Header>

        </Item>
    )
}



export default CampusThumb;