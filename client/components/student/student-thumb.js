import React from 'react';
import { Link } from 'react-router-dom';
import {
    Card,
    Image,
} from 'semantic-ui-react';

const StudentThumb = (props) => {
    const student = props.student;
    return (
        <Card>
            <Image src={student.imageUrl} />
            <Card.Content>
                <Card.Header>
                    {student.fullName}
                </Card.Header>
                <Card.Meta>
                    <span className='date'>
                        GPA: {student.gpa}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {student.email}
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default StudentThumb;