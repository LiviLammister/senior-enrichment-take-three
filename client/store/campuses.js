import axios from 'axios';

/**
 * ACTION TYPES
 */
const INIT   = 'INITIALIZE_CAMPUSES';
const CREATE = 'CREATE_CAMPUS';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';

/**
 * ACTION CREATORS
 */
const init   = campus => ({type: INIT,   campus});
const create = campus => ({type: CREATE, campus});
const remove = id     => ({type: REMOVE, id});
const update = campus => ({type: UPDATE. campus})

/**
 * REDUCER
 */
export default function reducer(campus = [], action) {
    switch(action.type) {
        case INIT:
            return action.campus;
        case CREATE:
            return [action.campus, ...campus];
        case REMOVE:
            return campus.filter(campus => campus.id !== action.id);
        case UPDATE:
            return campus.map(campus => (
                action.campus.id === campus.id ? action.campus : campus
            ));
        default:
            return campus;
    }
}

/**
 * THUNK CREATORS
 */
export const fetchCampuses = () => dispatch => {
    axios.get('/api/campus')
        .then(res => dispatch(init(res.data)));
};

export const removeCampus = id => dispatch => {
    axios.delete(`/api/campus/${id}`)
        .then(() => dispatch(remove(id)))
        .catch(err => console.error(`Removing studeht: ${id} unsuccesful`, err));
};

export const addCampus = campus => dispatch => {
    axios.post('api/campus', campus)
        .then(res => dispatch(create(res.data)))
        .catch(res => console.error(`Creating student: ${id} unsuccesful`, err));
};

export const updateCampus = (id, campus) => {
    axios.put(`/api/campus/${id}`, campus)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating student: ${id} unsuccesful`, err));
};