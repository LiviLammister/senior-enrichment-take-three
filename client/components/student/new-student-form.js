import axios                from 'axios';
import React, { Component } from 'react';
import {
    Divider,
    Form,
    Modal,
} from 'semantic-ui-react';

import store, { createStudent } from '../store';

export default class NewStudentForm extends Component {

    constructor() {
        super();
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => { this.setState(store.getState()) });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <Modal.Content>
                <Modal.Header as="h2">
                    New Student
                </Modal.Header>
                <Divider />
                <Modal.Content>
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input label="First Name" />
                            <Form.Input label="Last Name" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input label="Email" />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input label="GPA" />
                        </Form.Group>
                    </Form>
                </Modal.Content>
            </Modal.Content>
        )
    }
}