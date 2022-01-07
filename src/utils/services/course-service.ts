import { ICourse } from "../../models/ICourse";

const baseCourseEndpointURL = "https://localhost:5001/Course";

export function GetCourseList(): Promise<ICourse[]> {
  // Return a promise that feeds the data received from the endpoint
  return fetch(baseCourseEndpointURL).then((resp) => resp.json());
}

export function GetCourse(id: string): Promise<ICourse> {
  return fetch(`${baseCourseEndpointURL}/FindCourseById/${id}`).then((resp) =>
    resp.json()
  );
}

export function CreateCourse(course: ICourse): Promise<any> {
  return fetch(baseCourseEndpointURL, {
    method: "POST",
    body: JSON.stringify(course),
  }).then((resp) => resp.json());
}

export function Update(course: ICourse): Promise<any> {
  return fetch(baseCourseEndpointURL, {
    method: "PUT",
    body: JSON.stringify(course),
  }).then((resp) => resp.json());
}

export function DeleteCourse(courseId: string): Promise<any> {
  return fetch(`${baseCourseEndpointURL}/${courseId}`, {
    method: "DELETE",
  }).then((resp) => resp.json());
}
