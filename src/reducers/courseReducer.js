import * as types from '../actions/actionTypes';
//takes the current state and an action and returns a new state
export default function courseReducer( state = [], action){
  // why we need a type in our action
  // Switch statement used in reducers
  switch(action.type){
    case types.CREATE_COURSE: 
      // ES6 spread operator   
      // take an array, copy over the array to a new array and with an extra value
      return [...state, Object.assign( {}, action.course )];
    // the default when no match just return the state
    default: 
        return state;        
  }
}
