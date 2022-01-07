import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import CourseInfoDiv from "../../../components/UI/CourseInfoDiv";
import { ICourse } from "../../../models/ICourse";
import { GetCourse } from "../../../utils/services/course-service";

/**
 * Example page on using a service to fetch and parse data into a react component using Next's dynamic routing
 */
const CourseInfoPage: NextPage = () => {
  const router = useRouter();
  const { courseid } = router.query;

  const [course, setCourse] = useState<ICourse | null>(null);

  useEffect(() => {
    if (courseid !== undefined)
      GetCourse(courseid as string).then((data) => setCourse(data));
  }, [courseid]); // make a call when the router hook updates the courseid value,
  // when the component initializes `courseid` will match the value in the route parameter

  return (
    <div className="container">
      {course ? <CourseInfoDiv course={course} /> : <h2>Loading...</h2>}
    </div>
  );
};

export default CourseInfoPage;
