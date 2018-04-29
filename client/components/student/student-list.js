import axios from 'axios';
import React, { Component } from 'react';
import {
    Button,
    Container,
    Card,
    Divider,
    Header,
    Modal,
} from 'semantic-ui-react';

import { 
    NewStudentForm,
    StudentThumb,
} from '../index';
import store, { getStudents } from '../store';

export default class StudentList extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { this.setState(store.getState()) });
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => { store.dispatch(getStudents(students)) });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const students = this.state.students;
        if (!students) return <div />
        return (
            <div>
                <Container>
                    <Header as='h1'>
                        All Students
                    <Modal trigger={<Button floated="right">Add Student</Button>}>
                        <NewStudentForm />
                    </Modal>
                    </Header>
                    <Divider />
                </Container>
                <Card.Group>
                    {students.map(student =>
                        <StudentThumb
                            key={student.id}
                            student={student}
                        />)}
                </Card.Group>
            </div>
        );
    }
}