import { useState } from "react"
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/pages/Home.module.scss";
import loginStyles from "../../styles/login/Login.module.scss";
import axios from "axios";
import { useRouter } from "next/router";

const Login: NextPage = () => {

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [disableButton, setDisableButton] = useState(false);
  const router  = useRouter();


  const onUsernameChange = (e:React.ChangeEvent<HTMLInputElement>) => 
  {
    setUsername(e.target.value);
  }

  const onPasswordChange = (e:React.ChangeEvent<HTMLInputElement>) =>
  {
    setPassword(e.target.value);
  }

  const onError = () => {
    if (error != true)
    {
      setError(true);

      let errorTimer = setInterval(() => {
        setError(false);
        clearInterval(errorTimer);
      },5000);
    }
  }

  const onLogin = () =>
  {
      setDisableButton(true);    
      axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.post("http://localhost:8000/clientportal/api/login", {
          email: username,
          password: password
      })
      .then((response) => {
          console.log(response);
          setDisableButton(false);    
      }, (error) => {

          setDisableButton(false);    
          setErrorMessage("There's a server Error. Please report this and try again later! ");
          onError();
      })
      
     //router.push("/")
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

      <div className="container my-5 border shadow">
          <div className="p-4">
            <div className="h5 fw-bold d-flex justify-content-center">
              User Login
            </div>
            
            <div className="row gap-3 py-2">
              <div>
               <span className={[ "alert","alert-danger", error ? loginStyles.alertBox:loginStyles.noAlertBox].join(" ")} role="alert" >
                { errorMessage } 
              </span>
              </div>

              <div className="offset-2 col-1 fw-bold">
                Username:
              </div>
              <div className="col-6 d-flex flex-column">
                <input type="textbox" className="" onChange={onUsernameChange} value={username}/>
              </div>
            </div>
            <div className="row gap-3 py-2">
              <div className="offset-2 col-1 fw-bold">
                Password:
              </div>
              <div className="col-6 d-flex flex-column">
                <input type="password" className="" onChange={onPasswordChange} value={password} />
              </div>
            </div>

            <div className="row py-2">
              <div className="offset-4 col-4 d-flex flex-column">
                <button type="button" className="btn-primary rounded p-1" onClick={onLogin} disabled={disableButton ? true:false} >Log In</button>
              </div>
            </div>

            <div className="row py-2">
              <div className="col-12 col-md-4 d-flex justify-content-center my-2">
                <a href="/register/register">New User?</a>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center my-2">
                <a>Forgot Username</a>
              </div>
              <div className="col-12 col-md-4 d-flex justify-content-center my-2">
                <a>Forgot Password</a>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
};

export default Login;