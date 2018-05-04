import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
    Button,
    Container,
    Divider,
    Form,
    Header,
    TextArea,
} from 'semantic-ui-react';

import { updateStudent } from '../../redux/students';

class EditStudent extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        this.setState(this.props.currentStudent);
    }

    handleChange = (evt, { name, value }) => {
        console.log('current student', this.props.currentStudent)
        this.setState({ [name]: value });
    }

    handleSubmit = () => {
        this.props.updateStudent(this.props.currentStudent.id, this.state)
    }

    render() {
        const currentStudent = this.props.currentStudent;
        //const campuses = this.props.campuses;
        if (!currentStudent) return <div />
        return (
            <Container text>
                <Header
                    as="h1"
                    content="Edit Student"
                    textAlign="center"
                />
                <Divider />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input
                            fluid
                            label="First Name"
                            placeholder={currentStudent.firstName}
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            label="Last Name"
                            placeholder={currentStudent.lastName}
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label="GPA"
                            placeholder={currentStudent.gpa}
                            name="gpa"
                            value={this.state.gpa}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label="Image URL"
                            placeholder={currentStudent.imgUrl}
                            name="imgUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            label="Email"
                            placeholder={currentStudent.email}
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <Form.Field
                            control={Button}
                            content="Confirm"
                        />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = ({ campuses, students }, ownProps) => {
    const paramId = Number(ownProps.match.params.id);
    return {
        campuses,
        currentStudent: students.find(student => student.id === paramId),
    }
}

const mapDispatch = { updateStudent };

export default connect(mapStateToProps, mapDispatch)(EditStudent);
