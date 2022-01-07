import { ITag } from "./ITag";

export interface ICourse {
    id: number;
    courseName: string;
    instructor: string;
    description: string;
    duration: number; // <-- How many weeks the course is expected to take.
    tags: ITag[];
}