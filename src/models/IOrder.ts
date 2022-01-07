import { ICourse } from "./ICourse";
import { IOrderTag } from "./IOrderTag";

export interface IOrder {
    id: number;
    company: string;
    technologies: IOrderTag[];
    courses: ICourse[];
}