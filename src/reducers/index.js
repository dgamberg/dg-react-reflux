// R O O T   R E D U C E R - combines all reducers into one
import { combineReducers} from 'redux';
//courses referenced in reducer
import courses from './courseReducer';

const rootReducer = combineReducers({
    //ES6 shorthand property name - courses: courses
    courses
});

export default rootReducer;
