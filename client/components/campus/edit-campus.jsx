import _                    from 'lodash';
import React, { Component } from 'react';
import { connect }          from 'react-redux';
import {
    Card,
    Container,
    Divider,
    Form,
    Header,
} from 'semantic-ui-react';

import {
    StudentThumb,
} from '../index';

import { updateCampus } from '../../redux/campuses';

class Campus extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campus: props.campus,
            students: props.students,
        }
    }

    componentWillReceiveProps(newProps, oldProps) {
        if (newProps.campus !== oldProps.campus) {
            this.setState({
                campus: newProps.campus,
            });
        }
        if (newProps.students !== oldProps.students) {
            this.setState({
                students: newProps.students,
            });
        }
    }

    onCampusUpdate(campusUpdateObj) {
        const { debouncedUpdateCampus } = this.props;
        const { campus } = this.state;
        this.setState({
            campus: Object.assign(campus, campusUpdateObj)
        });
        debouncedUpdateCampus(campus.id, campusUpdateObj);
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('SUBMITTED!');
    }

    render() {
        const campus = this.state.campus;
        const students = this.state.students
        console.log('state: ', this.state)
        console.log('props: ', this.props)
        if (!campus) return <div />
        if (!students) return <div />
        return (
            <div>          
                <Container text>
                    <Header
                        as='h1'
                        content="Edit Campus"
                        textAlign="center"
                    />
                    <Divider />
                    <Form>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Name"
                                name="name"
                                onChange={evt => this.onCampusUpdate({ name: evt.target.value })}
                                placeholder="Name"
                                value={campus.name}
                            />
                            <Form.Input
                                label="Image URL"
                                name="imageUrl"
                                onChange={evt => this.onCampusUpdate({ imageUrl: evt.target.value })}
                                placeholder="URL"
                                value={campus.imageUrl}
                            />
                        </Form.Group>
                        <Form.Group widths="equal">
                            <Form.Input
                                label="Description"
                                name="description"
                                onChange={evt => this.onCampusUpdate({ description: evt.target.value })}
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
                    {this.state.students.map(student =>
                        <StudentThumb key={student.id} student={student} />)}
                </Card.Group>
            </div>
        )
    }
}

const mapStateToProps = ({campuses, students}, ownProps) => {
    const paramId = Number(ownProps.match.params.id);
    return {
        campus   : campuses.find(campus => campus.id === paramId),
        students : students.filter(student => student.campusId === paramId)
    }
}

const mapDispatch = (dispatch, ownProps) => ({
    debouncedUpdateCampus: _.debounce((...args) => {
      dispatch(updateCampus(...args));
    }, 500)
  });

export default connect(mapStateToProps, mapDispatch)(Campus);