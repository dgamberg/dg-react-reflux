import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer( state = initialState.courses, action){

  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
          return action.courses;
    case types.CREATE_COURSE_SUCCESS:
          return [
            ...state, //spread operator copy of array, include the new course
            Object.assign({}, action.course)
          ];
    case types.UPDATE_COURSE_SUCCESS:
          return [ // filter all items in the list except the one being updated
            ...state.filter(course => course.id !== action.course.id),
            Object.assign({}, action.course)
          ];
    default:
        return state;
  }
}
