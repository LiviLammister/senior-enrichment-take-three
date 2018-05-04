import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Button,
    Container,
    Form,
    Header,
} from 'semantic-ui-react';
import {addCampus} from '../../redux/campuses';

class AddCampus extends Component {
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
        this.props.addCampus(this.state);
    }

    render() {
        return (
            <Container text>
                <Header
                    as="h1"
                    content="Add Campus"
                    textAlign="center"
                />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths="equal">
                        <Form.Input
                            fluid
                            label="Name"
                            placeholder="Name"
                            name="name"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                        <Form.Input
                            fluid
                            label="Description"
                            placeholder="Description"
                            name="description"
                            value={this.state.description}
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

const mapStateToProps = null;

const mapDispatch = { addCampus };
export default connect(mapStateToProps, mapDispatch)(AddCampus);