import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/aboutUs/AboutUs.module.scss";

/**
 * AboutUsComp - used to display the about us page components
 * @param props
 * @returns {JSX.Element}
 * @author Matthew Terry
 */
const AboutUsComp: FunctionComponent = () => {
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
          <h1 className="display-4">About Us</h1>
          <p className="lead">
            Our Mission is to provide customers with a perfect employee finding
            tool, and to bring people together from all over the world.
          </p>
          <hr className="my-4" />
          <p>Start browsing our open selection!</p>
          <p className="lead">
            <Link href="/order/course">
              <a className="btn rvtr-btn-secondary btn-lg" role="button">
                Find Employees
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
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2832&q=80"
                  className="card-img-top"
                  alt="https://via.placeholder.com/300x200?text=Course+3"
                />
                <div className="card-body">
                  <h5 className="card-title">Contact Information</h5>
                  <p className="card-text">
                    Company Name here Address: Phone: Fax:
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

export default AboutUsComp;
