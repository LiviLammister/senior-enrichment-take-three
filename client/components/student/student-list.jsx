import React       from 'react';
import { connect } from 'react-redux';
import { Link }    from 'react-router-dom';
import {
    Button,
    Container,
    Card,
    Divider,
    Header,
} from 'semantic-ui-react';

import {
    StudentThumb,
} from '../index';


const StudentList = (props) => {
        const students = props.students;
        if (!students) return <div />
        return (
            <div>
                <Container>
                    <Header as='h1'>
                        All Students
                        <Button
                            as={Link} to="/students/add"
                            content="Add Student"
                            floated="right"
                        />
                    </Header>
                    <Divider />
                </Container>
                <Card.Group centered>
                    {students.map(student =>
                        <StudentThumb
                            key={student.id}
                            student={student}
                        />)}
                </Card.Group>
            </div>
        );
    }

const mapStateToProps = ({students}) => ({students});
export default connect(mapStateToProps)(StudentList)