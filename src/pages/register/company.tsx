import React, {useState} from "react"
import {NextPage} from "next";
import Head from "next/head";
import Link from "next/Link";
import styles from "../../styles/pages/Home.module.scss";
import companyStyles from "../../styles/register/Company.module.scss";


const Company : NextPage = () => {

    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [password, setPassword] = useState("");
    const [pageError, setPageError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const submitApplication = () =>
    {
      setErrorMessage("not implemented yet!");
      setPageError(true);
    }

    const onCompanyNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
      setCompanyName(e.target.value);
    }
    
    const onEmailChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
      setEmail(e.target.value);
    }

    const onFirstNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
      setFirstName(e.target.value);
    }

    const onLastNameChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
      setlastName(e.target.value);
    }

    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
      setPassword(e.target.value);
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
          <div className={companyStyles.box}>
              <div className={companyStyles.registerContainer}>
                    <div className={companyStyles.registeritem1}>
                        <h3>Company User Registration</h3>
                    </div>
                    <div className={companyStyles.registeritem2}>
                        <div className={["alert","alert-danger", pageError ? companyStyles.alertBox : companyStyles.noAlertBox].join(" ")} role="alert">
                          { errorMessage }
                        </div>
                        <div className={companyStyles.form}>
                            <div><b>Company Name:</b></div>
                            <div><input type="text" onChange={onCompanyNameChange } value={companyName} /></div>
                            <div><b>E-Mail:</b></div>
                            <div><input type="text" onChange={onEmailChange} value={email}/></div>
                            <div><b>Firstname:</b></div>
                            <div><input type="text" onChange={onFirstNameChange} value={firstname}/></div>
                            <div><b>Lastname:</b></div>
                            <div><input type="text" onChange={onLastNameChange} value={lastname}/></div>
                            <div><b>Password:</b></div>
                            <div><input type="password" onChange={onPasswordChange} value={password}/></div>
                        </div>
                    </div>
                    <div className={companyStyles.registerItem3}>
                        <div className={companyStyles.butons}>
                            <div className={companyStyles.button1}>
                                <Link href="#" >
                                    <a className="btn rvtr-btn-secondary btn-lg" role="button" onClick={submitApplication}>
                                        Register
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/order/course">
                                    <a className="btn rvtr-btn-secondary btn-lg" role="button">
                                        Cancel
                                    </a>
                                </Link>
                            </div>
                        </div>

                    </div>
              </div>
          </div>
      </div>
    </div>
    )
}

export default Company;