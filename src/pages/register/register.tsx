import { useState } from "react"
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/pages/Home.module.scss";
import registerStyles from "../../styles/register/Register.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

const Register: NextPage = () => {

  const router = useRouter();

  const onCompanyButtonClick = () =>
  {
      router.push("/register/company");  
  }
  const onApplicantClick = () =>
  {
    router.push("/register/applicant");
  }

  return (

    <div className="order-form-container">
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
      <div className="">
          <div className={registerStyles.box}>
            <div className={registerStyles.boxCol}>
                <div className={registerStyles.div1}>
                  <h4><b>User Type</b></h4>
                </div>
                <div className={registerStyles.div2}>
                    <div className={registerStyles.buttons}>
                      <button type="button" className={["btn", "rvtr-btn-seconday", "btn-lg", "p-1","buttonW", registerStyles.companyButton, registerStyles.pad].join(" ")} onClick={onCompanyButtonClick} >Company</button>
                      <button type="button" className={["btn", "rvtr-btn-seconday", "btn-lg", "p-1", "buttonW", registerStyles.userButton].join(" ")}  onClick={onApplicantClick}>Applicant</button>
                    </div>
                </div>
                <div className={registerStyles.div3}>
                  
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Register;