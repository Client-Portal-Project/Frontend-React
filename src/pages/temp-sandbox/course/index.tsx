import { NextPage } from "next";
import { useEffect, useState } from "react";
import CourseInfoDiv from "../../../components/UI/CourseInfoDiv";
import { ICourse } from "../../../models/ICourse";
import { GetCourseList } from "../../../utils/services/course-service";

const CourseListPage: NextPage = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);

  // When the component initializes `useEffect` will run.  You can run init logic here
  useEffect(() => {
    // call the endpoint to fetch a list of courses
    GetCourseList()
      // then, once the data is received, set that data to the `courses` state
      .then((data) => setCourses(data))
      // TODO: if something fails, implement a user friendly way to notify an error here in the `catch`
      .catch((e) =>
        console.error(
          "An error has occured fetching data from the /Course endpoint"
        )
      );
  }, []); // make sure to use square brackets so the component runs this logic only once on init

  // Using the `courses` state we can tell whether or not our component is loading or ready based on
  // whether or not `courses` has any data yet from our call
  return (
    <div>
      <h2>Courses</h2>
      {/* A better practice might be to create a `loading` state, that way even of the call fails, we can react accordingly  */}
      {courses.length ? (
        <ul>
          {/* mapping is a common practice to render a list of objects and parse them in a way React can understand.
              Ensure that the map returns React elements as the items of the array. */}
          {courses.map((courseItem, arrayIndex) => (
            // A key helps react to make sure to know which component to update, delete or ignore
            <CourseInfoDiv key={arrayIndex} course={courseItem} />
          ))}
        </ul>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default CourseListPage;
