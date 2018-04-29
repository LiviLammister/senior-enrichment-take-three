import axios from 'axios';
import { createStore } from 'redux';
/**
 * ACTION TYPES
 */
const GET_CAMPUSES  = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const GET_STUDENTS = 'GET_STUDENTS';

/**
 * ACTION CREATORS
 */
export const getCampuses  = campuses => ({ type: GET_CAMPUSES,  campuses });
export const createCampus = campus   => ({ type: CREATE_CAMPUS, campus });
export const removeCampus = id       => ({ type: REMOVE_CAMPUS, id });
export const updateCampus = campus   => ({ type: UPDATE_CAMPUS, campus })

export const getStudents = students => ({ type: GET_STUDENTS, students })
/**
 * INITIAL STATE
 */
const initialState = {
    campuses: [],
    students: [],
}

/**
 * REDUCER
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAMPUSES:
            return {...state, campuses : action.campuses};
        // case CREATE_CAMPUS:
        //     return [action.campus, ...campuses];
        // case REMOVE_CAMPUS:
        //     return campuses.filter(campus => campus.id !== action.id);
        // case UPDATE_CAMPUS:
        //     return campuses.map(campus => (
        //         action.campus.id === campus.id ? action.campus : campus
        //     ));
        case GET_STUDENTS:
            return {...state, students: action.students};
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;