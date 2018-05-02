/**
 * ACTION TYPES
 */
const CREATE = 'CREATE_CAMPUS';
const INIT   = 'GET_CAMPUSES';
const REMOVE = 'REMOVE_CAMPUS';
const UPDATE = 'UPDATE_CAMPUS';

/**
 * ACTION CREATORS
 */
const create = campus   => ({ type: CREATE_CAMPUS, campus });
const init   = campuses => ({ type: INIT_CAMPUSES, campuses });
const remove = id       => ({ type: REMOVE_CAMPUS, id });
const update = campus   => ({ type: UPDATE_CAMPUS, campus });

/**
 * REDUCER
 */
const reducer = (campuses = [], action) => {
    switch(action.type) {
        case CREATE:
            return [action.campus, ...campuses];
        case INIT:
            return action.campuses;
        case REMOVE:
            return campuses.filter(campus => campus.id !== action.id);
        case UPDATE:
            return campuses.map(campus => (
                action.campus.id === campus.id ? action.campus : campus
            ));
        default:
            return campuses;
    }
}

/**
 * THUNK CREATORS
 */
export const addCampus = (campus) => dispatch => {
    axios.post('/api/campuses', campus)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
};

export const fetchCampuses = () => dispatch => {
    axios.get('/api/campuses')
        .then(res => dispatch(init(res.data)))
        .catch(err => console.error('Fetching campuses unsuccessful', err));
};

export const removeCampus = (id) => dispatch => {
    axios.delete(`/api/campuses/${id}`)
        .then(() => dispatch(remove(id)))
        .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
    axios.put(`/api/campuses/${id}`, campus)
        .then(res => dispatch(update(res.data)))
        .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};

export default reducer;