import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Button,
    Container,
    Form,
    Header,
} from 'semantic-ui-react';
import {addStudent} from '../../redux/students';

class AddStudent extends Component {
    constructor (props) {
        super(props);
        this.state = {};
        this.isDirty = false;
    }

    handleChange = (evt, {name, value}) => {
        console.log('state', this.state)
        this.setState( {[name]: value});
        this.isDirty = true;
    }

    handleSubmit = () => {
        this.props.addStudent(this.state);
    }

    render() {
        return (
            <Container text>
                <Header
                    as="h1"
                    content="Add Student"
                    textAlign="center"
                />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input
                            fluid
                            label="First Name"
                            placeholder="Name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            label="Last Name"
                            placeholder="Last Name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label="GPA"
                            placeholder="GPA"
                            name="gpa"
                            value={this.state.gpa}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label="Image URL"
                            placeholder="imageURL"
                            name="imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Input
                            label="Email"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <Form.Field control={Button} content="Confirm" />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = null;

const mapDispatch = { addStudent };
export default connect(mapStateToProps, mapDispatch)(AddStudent);
