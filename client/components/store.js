import axios from 'axios';
import { createStore } from 'redux';
/**
 * ACTION TYPES
 */
const GET_CAMPUSES  = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

const GET_STUDENTS    = 'GET_STUDENTS';
const CREATE_STUDENT  = 'CREATE_STUDENT';
const ADD_NEW_STUDENT = 'GET_NEW_STUDENT';

/**
 * ACTION CREATORS
 */
export const getCampuses  = campuses => ({ type: GET_CAMPUSES,  campuses });
export const createCampus = campus   => ({ type: CREATE_CAMPUS, campus });
export const removeCampus = id       => ({ type: REMOVE_CAMPUS, id });
export const updateCampus = campus   => ({ type: UPDATE_CAMPUS, campus });

export const getStudents   = students => ({ type: GET_STUDENTS,    students });
export const createStudent = student  => ({ type: CREATE_STUDENT,  student });
export const AddNewStudent = student  => ({ type: ADD_NEW_STUDENT, student });
/**
 * INITIAL STATE
 */
const initialState = {
    campuses: [],
    students: [],
    student: {
        firstName: '',
        lastName: '',
        email: '',
        gpa: 0.0
    }
}

/**
 * REDUCER
 */
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CAMPUSES:
            return { ...state, campuses : action.campuses };
        // case CREATE_CAMPUS:
        //     return [action.campus, ...campuses];
        // case REMOVE_CAMPUS:
        //     return campuses.filter(campus => campus.id !== action.id);
        // case UPDATE_CAMPUS:
        //     return campuses.map(campus => (
        //         action.campus.id === campus.id ? action.campus : campus
        //     ));
        case GET_STUDENTS:
            return { ...state, students: action.students };
        case CREATE_STUDENT:
            return { ...state, student: action.student };
        case ADD_NEW_STUDENT:
            return { ...state, students: [...state.students, action.student]}
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;