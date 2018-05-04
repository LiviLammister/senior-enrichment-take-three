import axios from 'axios';

/**
 * ACTION TYPES
 */
const CREATE = 'CREATE_STUDENT';
const INIT   = 'GET_STUDENTS';
const UPDATE = 'UPDATE_STUDENT';
const REMOVE = 'REMOVE_STUDENT';

/**
 * ACTION CREATORS
 */
const create = student  => ({ type: CREATE, student });
const init   = students => ({ type: INIT,   students });
const remove = id       => ({ type: REMOVE, id });
const update = student  => ({ type: UPDATE, student });

/**
 * REDUCER
 */
const reducer = (students = [], action) => {
    switch (action.type) {
        case CREATE:
            return [action.student, ...students];
        case INIT:
            return action.students;
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
export const addStudent = student => dispatch => {
    axios.post('/api/students', student)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const fetchStudents = () => dispatch => {
    axios.get('/api/students')
        .then(res => dispatch(init(res.data)))
        .catch(err => console.error('Fetching students unsuccessful', err));
};

export const removeStudent = id => dispatch => {
    axios.delete(`/api/students/${id}`)
        .then(() => dispatch(remove(id)))
        .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
    axios.put(`/api/students/${id}`, student)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};

export default reducer;
