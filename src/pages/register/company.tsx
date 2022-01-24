import React, {useState} from "react"
import {NextPage} from "next";
import Head from "next/head";
import Link from "next/Link";
import styles from "../../styles/pages/Home.module.scss";
import companyStyles from "../../styles/register/Company.module.scss";
import Register from "./register";
import axios from "axios";


const Company : NextPage = () => {

    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [password, setPassword] = useState("");
    const [pageError, setPageError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [file, setFile] = useState<Blob>();
    const [messages, setMessages]= useState<string[]>([]);

    const register = (e:any) =>
    {
      var hasErrors = false;
      setMessages([]);

      if (companyName.length === 0)
      {
        messages.push("Company Name")
        hasErrors = true;
      }
      if (email.length === 0)
      {
        messages.push("E-mail")
        hasErrors = true;
      }
      if (firstname.length == 0)
      {
        messages.push("Firstname")
        hasErrors = true;
      }
      if (lastname.length === 0) 
      {
        messages.push("Lastname")
        hasErrors = true;
      } 
      if (password.length == 0)
      {
        messages.push("password")
        hasErrors = true;
      }   
      if (hasErrors)
      {
          showError("Errors the field(s) is/are required: " + messages.join());
      } else {
        let blob = new Blob(['hello'], {'type':'text/plan'})

        let fileReader = new FileReader();

        fileReader.readAsArrayBuffer(blob);
        fileReader.onload = function(event) {
          let arrayBuffer = fileReader.result;
        }     

        var u8 = new Uint8Array([65, 66, 67, 68]);
        var decoder = new TextDecoder('utf8');
        var b64encoded = btoa(decoder.decode(u8));

        console.log(b64encoded)

      axios.post("http://localhost:5000/api/Client", 
      {
          "clientId": 0, 
          "companyName": companyName,
          "needs":[ null ],
          "clientUsers": [
            {
              "clientUserId": 0,
              "userID": 0,
              "clientID": 0,
              "user": {
                "userId": 0,
                "email": email,
                "password": password,
                "approved": true,
                "owner": {
                  "ownerId": 0,
                  "userId": 0,
                  "applications":
                  [ null ]
                },
                "applicant":
                {
                  "applicantId":0,
                  "resume":[ null ],
                  "aboutMe":"string",
                  "educationLevel":"string",
                  "educationField":"string",
                  "employmentStatus":"string",
                  "applicantSkills":
                  [
                    {
                      "applicantSkillId":0,
                      "applicantId":0,
                      "skillId":0
                    }
                  
                  ],
                  "userId":0,
                  "applicantOccupations":[
                    null
                  ]  
                },
                "firstName": firstname,
                "lastName": lastname,

              },
            },
          ]
      },
      {
          headers:
          {
              'Content-Type': 'application/json'
          }
      })
      .then((response) => {

        if (response.status == 400)
        {
        } else {

        }
      }, (error ) => {
        console.log(error);
        showError("Server error. Please contract the administrator.");       
      })
      }
    }

    const showError = (errorMsg:string) =>
    {
      if (pageError == false)
      {
        setPageError(true);
        setErrorMessage(errorMsg);
        let errorTimer = setInterval(() => {
          setPageError(false);
          setErrorMessage("");
          clearInterval(errorTimer);
        }, 5000)
      }
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
                    <div className={companyStyles.registeritem25}>
                      <div className={["alert","alert-danger", pageError ? companyStyles.alertBox : companyStyles.noAlertBox].join(" ")} role="alert">
                          { errorMessage }
                      </div>
                    </div>
                        <div className={companyStyles.form}>
                            <div><b>Company Name:</b></div>
                            <div><input type="text" onChange={onCompanyNameChange} value={companyName} /></div>
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
                                    <a className="btn rvtr-btn-secondary btn-lg" role="button" onClick={register}>
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