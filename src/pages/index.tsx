import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/pages/Home.module.scss";

import { COURSE_ARR } from "../models/temp/sampleData"; // temp for testing while there's no back end connection

// mapping an array to create individual course cards
const arr_list = COURSE_ARR.map((a, ind) => (
  <div key={ind}>
    <div>
      {a.id}. {a.courseName}
    </div>
    <div>{a.duration} weeks</div>
    <div>Instructor: {a.instructor}</div>
    <div>{a.description}</div>
    <hr />
  </div>
));

/**
 *
 * @returns
 */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Client Portal</title>
        <meta
          name="description"
          content="Tool for clients to make requests for candidates"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={`py-5 ${styles.jumbotron}`}>
        <div className="container">
          <h1 className="display-4">Welcome!</h1>
          <p className="lead">Introducing the Employee Hiring Tool</p>
          <hr className="my-4" />
          <p>Start browsing our open selection!</p>
          <p className="lead">
            <Link href="/order/course">
              <a className="btn rvtr-btn-secondary btn-lg" role="button">
                Learn more
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="card my-5">
                <Image
                  width={400}
                  height={300}
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
                  className="card-img-top"
                  alt="https://via.placeholder.com/300x200?text=Course+3"
                />
                <div className="card-body">
                  <h5 className="card-title">Engineers</h5>
                  <p className="card-text">
                    Engineers, as practitioners of engineering, are
                    professionals who invent, design, analyze, build and test
                    machines, complex systems, structures, gadgets and materials
                    to fulfill functional objectives and requirements while
                    considering the limitations imposed by practicality,
                    regulation, safety and cost.
                  </p>
                  <a href="#" className="btn rvtr-btn-primary">
                    Continue &rarr;
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-4">
              <div className="card my-5">
                <Image
                  width={400}
                  height={300}
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
                  className="card-img-top"
                  alt="https://via.placeholder.com/300x200?text=Course+3"
                />
                <div className="card-body">
                  <h5 className="card-title">Medical Professionals</h5>
                  <p className="card-text">
                    A health professional (or healthcare professional) may
                    provide health care treatment and advice based on formal
                    training and experience. The field includes those who work
                    as a medical doctor (such as family physician, internist,
                    obstetrician, psychiatrist, radiologist, surgeon etc),
                    physician assistant, veterinarian, veterinary technician,
                    veterinary assistant, pharmacist, pharmacy technician,
                    medical assistant, nurse, physical therapist, occupational
                    therapist, dentist, midwife, psychologist, or who perform
                    services in allied health professions. A health professional
                    may also be an expert in public health or community health.
                  </p>
                  <a href="#" className="btn rvtr-btn-primary">
                    Continue &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="card my-5">
                <Image
                  width={400}
                  height={300}
                  src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2376&q=80"
                  className="card-img-top"
                  alt="https://via.placeholder.com/300x200?text=Course+3"
                />
                <div className="card-body">
                  <h5 className="card-title">Finance</h5>
                  <p className="card-text">
                    The role of the Finance Officer involves providing financial
                    and administrative support to colleagues, clients and
                    stakeholders of the business. It’s a role that may attract
                    applicants keen to move up the financial corporate ladder;
                    those with ambitions of being Finance Managers, or even the
                    CFO one day.
                  </p>
                  <a href="#" className="btn rvtr-btn-primary">
                    Continue &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
