import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
    Button,
    Card,
    Container,
    Divider,
    Form,
    Header,
    Input,
    TextArea,
} from 'semantic-ui-react';

import { StudentThumb } from '../index';
import { updateCampus } from '../../redux/campuses'

class EditCampus extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState(this.props.currentCampus);
    }

    handleChange = (evt, { name, value }) => {
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        this.props.updateCampus(this.props.currentCampus.id, this.state)
    }

    render() {
        const currentCampus = this.props.currentCampus;
        //const students = this.props.students;
        const studentsOnCampus = this.props.studentsOnCampus;
        if (!currentCampus) return <div />
        if (!studentsOnCampus) return <div />
        return (
            <div>
                <Container text>
                    <Header
                        as="h1"
                        content="Edit Campus"
                        textAlign="center"
                    />
                    <Divider />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Field
                                control={Input}
                                label="Name"
                                placeholder={currentCampus.name}
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
                            <Form.Field
                                control={Input}
                                label="Image URL"
                                placeholder={currentCampus.imageUrl}
                                name="imageUrl"
                                value={this.state.imageUrl}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Field
                            control={TextArea}
                            label="Description"
                            placeholder={currentCampus.description}
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange} />
                        <Form.Group inline>
                            <Form.Field
                                control={Button}
                                content="Confirm"
                            />
                        </Form.Group>
                    </Form>
                </Container>
                <Header
                    as="h2"
                    content="Students on Campus"
                    textAlign="center"
                />
                <Card.Group centered>
                    {studentsOnCampus.map(student =>
                        <StudentThumb key={student.id} student={student} />)}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = ({campuses, students}, ownProps) => {
    const paramId = Number(ownProps.match.params.id);
    return {
        currentCampus: campuses.find(campus => campus.id === paramId),
        studentsOnCampus: students.filter(student => student.campusId === paramId),
        students,
    }
}

const mapDispatch = { updateCampus };

export default connect(mapStateToProps, mapDispatch)(EditCampus);
