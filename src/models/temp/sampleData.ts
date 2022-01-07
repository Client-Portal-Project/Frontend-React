import { ICourse } from "../ICourse";

export const COURSE_ARR: ICourse[] = [
    {
        id: 1,
        courseName: "Java with Angular",
        instructor: "Fred",
        description: "It covers creating a back end in Java with a front end in Angular",
        duration: 12,
        tags: [{
            id: 1,
            name: ".NET"
        }]
    },
    {
        id: 2,
        courseName: "Java with React",
        instructor: "James",
        description: "It covers creating a back end in Java with a front end in React",
        duration: 10,
        tags: [{
            id: 1,
            name: ".NET"
        }]
    },
    {
        id: 3,
        courseName: ".NET with Angular",
        instructor: "Trevor",
        description: "It covers creating a back end in .NET with a front end in Angular",
        duration: 10,
        tags: [{
            id: 1,
            name: ".NET"
        }]
    },
    {
        id: 4,
        courseName: "iOS",
        instructor: "Christina",
        description: "It covers creating applications for Apple's mobile operation system",
        duration: 12,
        tags: [{
            id: 1,
            name: ".NET"
        }]
    },
    {
        id: 5,
        courseName: "Python Automation",
        instructor: "Susan",
        description: "It covers creating a test automation workflow in Python",
        duration: 10,
        tags: [{
            id: 1,
            name: ".NET"
        }]
    },
    {
        id: 6,
        courseName: "Java Automation",
        instructor: "Susan",
        description: "It covers creating a test automation workflow in Java",
        duration: 12,
        tags: [{
            id: 1,
            name: ".NET"
        }]
    }
]