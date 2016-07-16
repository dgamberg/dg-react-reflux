import React, {PropTypes} from 'react';
//bring in react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }


  //course row template
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render(){
    //destructuring
    const {courses} = this.props;

    return (
      <div>
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
// R E D U X   F U N C T I O N S
function mapStateToProps(state, ownProps){
  return {
    courses: state.courses // state.courses is from rootReducer
  };
}

function mapDispatchToProps(dispatch){
  return {
    // arrow parameter - anonymous function
    // Must go through dispatch or will not work as expected
    // wrapping our action in a call to dispatch so its easier to use
    // createCourse: course => dispatch(courseActions.createCourse(course));

    // ABBREVIATED VERSION OF ABOVE using bindActionCreators
    actions: bindActionCreators(courseActions, dispatch)
  };
}
// ABBREVIATED VERSION
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

// LONG VERSION WITH INTERMEDIATE VARIABLE
// const connectedStateAndProps = connect(mapStateToProps);
// export default connectedStateAndProps(CoursesPage);
