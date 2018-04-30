import axios from 'axios';
import { createStore } from 'redux';
/**
 * ACTION TYPES
 */
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const GET_CAMPUS    = 'GET_CAMPUS';
const GET_CAMPUSES  = 'GET_CAMPUSES';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const ADD_NEW_STUDENT = 'ADD_NEW_STUDENT';
const CREATE_STUDENT  = 'CREATE_STUDENT';
const GET_STUDENTS    = 'GET_STUDENTS';

/**
 * ACTION CREATORS
 */
export const createCampus = campus   => ({ type: CREATE_CAMPUS, campus });
export const getCampus    = campus   => ({ type: GET_CAMPUS,    campus})
export const getCampuses  = campuses => ({ type: GET_CAMPUSES,  campuses });
export const removeCampus = id       => ({ type: REMOVE_CAMPUS, id });
export const updateCampus = campus   => ({ type: UPDATE_CAMPUS, campus });

export const getStudents   = students => ({ type: GET_STUDENTS,    students });
export const createStudent = student  => ({ type: CREATE_STUDENT,  student });
/**
 * INITIAL STATE
 */
const initialState = {
    campus   : {},
    campuses : [],
    student  : {},
    students : [],
}

/**
 * REDUCER
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        // case CREATE_CAMPUS:
        //     return [action.campus, ...campuses];
        case GET_CAMPUS:
            return {...state, campus : action.campus}
        case GET_CAMPUSES:
            return { ...state, campuses : action.campuses };
        // case REMOVE_CAMPUS:
        //     return campuses.filter(campus => campus.id !== action.id);
        // case UPDATE_CAMPUS:
        //     return campuses.map(campus => (
        //         action.campus.id === campus.id ? action.campus : campus
        //     ));
        case GET_STUDENTS:
            return { ...state, students : action.students };
        // case CREATE_STUDENT:
        //     return { ...state, students : [...state.students, action.student]};
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;