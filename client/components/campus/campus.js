import axios                from 'axios'
import React, { Component } from 'react';
import {
    Card,
    Container,
    Divider,
    Form,
    Header,
    Image,
} from 'semantic-ui-react';

import {
    StudentThumb,
} from '../index';

import store, { 
    getCampus,
    getStudents,
} from '../store';

export default class Campus extends Component {

    constructor() {
        super();
        this.state = store.getState()
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { this.setState(store.getState())});
        axios.get(`/api/campuses/${this.props.match.params.id}`,)
            .then(res => res.data)
            .then(campus => {store.dispatch(getCampus(campus))});
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => { store.dispatch(getStudents(students)) })
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleChange = (event, { name, value }) => this.setState({ campus : { [name] : value } });

    handleSubmit = () => {
        console.log('SUBMITTED!');
    }

    studentsOnCampus = () => {
        const students = this.state.students;
        const campus = this.state.campus;
        return students.filter(student => student.campusId === campus.id)
    }

    render() {
        const campus = this.state.campus;
        console.log(this.state.students)
        if(!campus) return <div />
        return (
            <div>
                
                <Container text>
                    <Header
                        as='h1'
                        content="Edit Campus"
                        textAlign="center"
                    />
                    <Divider />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Name"
                                name="name"
                                onChange={this.handleChange}
                                placeholder="Name"
                                value={campus.name}
                            />
                            <Form.Input
                                label="Image URL"
                                name="imageUrl"
                                onChange={this.handleChange}
                                placeholder="URL"
                                value={campus.imageUrl}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Description"
                                name="description"
                                onChange={this.handleChange}
                                placeholder="URL"
                                value={campus.description}
                            />
                        </Form.Group>
                        <Form.Button content='Submit' />
                    </Form>
                    <Divider />
                    
                </Container>
                <Header
                    as='h2'
                    content="Students on Campus"
                    textAlign="center"
                />
                <Card.Group centered>
                    {this.studentsOnCampus().map(student =>
                        <StudentThumb
                            key={student.id}
                            student={student}
                        />)}
                </Card.Group>
            </div>
        )
    }
} 