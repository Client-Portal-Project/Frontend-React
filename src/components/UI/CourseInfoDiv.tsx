import React, { FunctionComponent } from "react";
import { ICourse } from "../../models/ICourse";

interface CourseListItemProps {
  course: ICourse;
}

const CourseInfoDiv: FunctionComponent<CourseListItemProps> = ({ course }) => {
  return (
    <div style={{ margin: "5px 0", border: "1px solid black" }}>
      <div>Name: {course.courseName}</div>
      {/* <div>Instructor: {course.instructor}</div> */}
      <div>Description: {course.description}</div>
    </div>
  );
};

export default CourseInfoDiv;
