import React, {PropTypes} from 'react';
//bring in react-redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      course: { title: ""  }
    };
    // do bind in the constructor, not the render
    // no functions in the render move them up to set state
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);

  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave(){
    //dispatch an action
   this.props.actions.createCourse(this.state.course);
  }
  //course row template
  courseRow(course, index){
    return <div key={index}>{course.title}</div>;
  }
  render(){
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title} />

        <input
            type="submit"
            value="Save"
            onClick={this.onClickSave} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

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