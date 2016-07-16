import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

// action creator
export function loadCoursesSuccess(courses){
   //must have at least a TYPE property!!
  return { type: types.LOAD_COURSES_SUCCESS, courses}; //course is the same as course:course
}
export function createCourseSuccess(course){
  return { type: types.CREATE_COURSE_SUCCESS, course};
}
export function updateCourseSuccess(course){
  return { type: types.UPDATE_COURSE_SUCCESS, course};
}

// THUNK
export function loadCourses(){
  //Thunks return a function that passes in dispatch
  return function(dispatch){
    dispatch(beginAjaxCall());
    return courseApi.getAllCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}

// THUNK
export function saveCourse(course){
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
        dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
