import axios from 'axios';

/**
 * ACTION TYPES
 */
const INIT   = 'INITIALIZE_STUDENTS';
const CREATE = 'CREATE_STUDENT';
const REMOVE = 'REMOVE_STUDENT';
const UPDATE = 'UPDATE_STUDENT';

/**
 * ACTION CREATORS
 */
const init   = students => ({type: INIT,   students});
const create = student  => ({type: CREATE, student});
const remove = id       => ({type: REMOVE, id});
const update = student  => ({type: UPDATE. student})

/**
 * REDUCER
 */
export default function reducer(students = [], action) {
    switch(action.type) {
        case INIT:
            return action.students;
        case CREATE:
            return [action.student, ...students];
        case REMOVE:
            return students.filter(student => student.id !== action.id);
        case UPDATE:
            return students.map(student => (
                action.student.id === student.id ? action.student : student
            ));
        default:
            return students;
    }
}

/**
 * THUNK CREATORS
 */
export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(init(res.data)));
};

export const removeStudent = id => dispatch => {
    axios.delete(`/api/students/${id}`)
        .then(() => dispatch(remove(id)))
        .catch(err => console.error(`Removing studeht: ${id} unsuccesful`, err));
};

export const addStudent = student => dispatch => {
    axios.post('api/students', student)
        .then(res => dispatch(create(res.data)))
        .catch(res => console.error(`Creating student: ${id} unsuccesful`, err));
};

export const updateStudent = (id, student) => {
    axios.put(`/api/students/${id}`, student)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating student: ${id} unsuccesful`, err));
};