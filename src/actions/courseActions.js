// action creator
export function createCourse(course){
   //must have at least a TYPE property!!
  return { type: 'CREATE_COURSE', course: course}; //course is the same as course:course
}
