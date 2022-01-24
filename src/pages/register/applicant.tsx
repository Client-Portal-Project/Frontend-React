import react from "react"
import React, { useState } from "react"
import {NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/pages/Home.module.scss";
import applicantStyles from "../../styles/register/Applicant.module.scss"
import axios from "axios"

const Applicant: NextPage = () => {
 
    const [ firstname, setFirstname] = useState("");
    const [ lastname, setLastname ] = useState("");
    const [ education, setEducation] = useState("");
    const [ educationField, setEducationField] = useState("");
    const [ email, setEmail] = useState("");
    const [ password, setPassword] = useState("");
    const [ about, setAbout] = useState("")
    const [ error, setError] = useState("")
    const [ hasError, setHasError] = useState(false)
    const [ messages, setMessages] = useState<string[]>([]);

    let fileByteArray:any = [];

    const chooseFile = (e:any) =>
    {
        let reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onloadend = (evt:any) => {
            fileByteArray = [];    
            if (evt.target.readyState === FileReader.DONE) {
             const arrayBuffer = evt.target.result;
             const array = new Uint8Array(arrayBuffer);
             for (let i=0;i<array.length;i++)
             {
                const a = array[i] ;
                fileByteArray.push(a);
             }
            console.log(fileByteArray)
        }
    }
  }


    const submitApplication = (e:any) =>
    {
        setHasError(false);
        let isError = false;
        setMessages([]);

        if (firstname.length === 0)
        {
            messages.push("Firstname");
            isError = true;
        }
        if (lastname.length === 0)
        {
            messages.push("Lastname");
            isError = true;
        }
        if (email.length === 0)
        {
            messages.push("E-mail");
            isError = true;
        }
        if (password.length === 0)
        {
            messages.push("Password");
            isError = true;
        }

        if (isError)
        {
            setError("Following error(s): " + messages.join(",") + " are/is required");
            setHasError(true);
        } else {
            axios.post("http://localhost:5000/api/ApplicantOccupation",
            {
                "applicantOccupationId": 0,
                "applicantId": 0,
                "applicant": {
                    "applicantId": 0,
                    "resume": [1,2,3],
                    "aboutMe": about,
                    "educationLevel": education,
                    "educationField": educationField,
                    "employmentStatus": "",
                    "applicantSkills": 
                    [
                        {
                            "applicantSkillId": 0,
                            "applicantId": 0,
                            "skillId": 0,
                            "skill": {
                                "skillId": 0,
                                "skillName": "",
                                "applicantSkills": [
                                    null
                                ],
                                "skillNeeds": [
                                        {
                                            "skillNeedId": 0,
                                            "needId": 0,
                                            "skillId": 0
                                        }
                                    ]
                                }
                            }
                        ],
                        "userId": 0,
                        "user": {
                            "userId": 0,
                            "email": email,
                            "password": password,
                            "approved": true,
                            "owner": {
                                "ownerId": 0,
                                "userId": 0,
                                "applications": [
                                    null
                                ]
                            },
                             "clientUser": {
                                 "clientUserId": 0,
                                 "userID": 0,
                                 "clientID": 0,
                                 "client": {
                                     "clientId": 0,
                                     "companyName": "",
                                     "needs": [
                                         null
                                     ],
                                     "clientUsers": [
                                         null
                                     ]
                                 }
                             },
                             "firstName": firstname,
                             "lastName": lastname,
                         },
                         "applicantOccupations": [
                        null
                         ]
                     },
                    "applications": [
                        {
                        "applicationId": 0,
                        "ownerId": 0,
                        "owner": {
                            "ownerId": 0,
                            "userId": 0,
                            "applications": [
                                null
                            ]
                        },
                        "applicantOccupationId": 0,
                        "needId": 0,
                            "need": {
                                "needId": 0,
                                "clientId": 0,
                                "client": {
                                    "clientId": 0,
                                    "companyName": "",
                                    "needs": [
                                        null
                                 ],
                                 "clientUsers": [
                                     null
                                 ]
                              },
                              "amountNeeded": 0,
                                 "amountFulfilled": 0,
                                 "educationField": "",
                                 "yearsExperience": 0,
                                 "skillNeeds": [
                                     null
                                 ],
                                "applications": [
                                    null
                                ],
                                "extraDescription": "",
                                "jobTitle": "",
                                "educationLevel": ""
                            },
                            "dateOfApplication": "2022-01-14T23:05:53.587Z",
                            "status": 0,
                            "interviews": [
                                null
                            ]
                        }
                    ],
                    "jobTitle": "",
                    "yearsExperience": 0,
                    "openMarket": true
                })
                 .then((response) => {

                 }, (error) => {
    
            })
        }
    }
    const firstnameOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setFirstname(e.target.value);
    }

    const lastnameOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setLastname(e.target.value);
    }

    const educationOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setEducation(e.target.value);
    }
    const educationFieldOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setEducationField(e.target.value);
    }

    const emailOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setEmail(e.target.value);
    }

    const passwordOnChange = (e:React.ChangeEvent<HTMLInputElement>) =>
    {
        setPassword(e.target.value);
    }

    return (
    <div className="">
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
        <div className={applicantStyles.layout}>
            <div className={applicantStyles.item1}>
                <div>
                    <h2><b>Application Registration Page</b></h2>
                </div>
            </div>
                <div className={ hasError ?  applicantStyles.item25:applicantStyles.item25Display }>
                    <div className={["alert","alert-danger"].join(" ")} >
                          { error }
                    </div>
                </div>
            <div className={applicantStyles.item2}>
                <div className={applicantStyles.formLayout}>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                First Name:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text" className={applicantStyles.textInput} value={firstname} onChange={firstnameOnChange}></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Education Field:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text" className={applicantStyles.textInput} value={education} onChange={educationOnChange}></input>
                            </div>
                       </div>
                    </div>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Last Name:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text"  className={applicantStyles.textInput} value={lastname} onChange={lastnameOnChange}></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Education Level:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text" className={applicantStyles.textInput} value={educationField} onChange={educationFieldOnChange}></input>
                            </div>
                       </div>
                    </div>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                E-Mail:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="text" className={applicantStyles.textInput} value={email} onChange={emailOnChange}></input>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Resume:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="file" onClick={chooseFile}/>
                            </div>
                       </div>
                    </div>
                    <div className={applicantStyles.formLayoutRow}>
                        <div className={applicantStyles.fieldCol} >
                            <div className={applicantStyles.fieldLayout}>
                                Password:
                            </div>
                            <div className={applicantStyles.fieldLayout}>
                                <input type="password" className={applicantStyles.textInput}  value={password} onChange={passwordOnChange}/>
                            </div>
                        </div>
                        <div className={applicantStyles.fieldCol} >
                       </div>
                    </div>
                </div>
            </div>
            <div className={applicantStyles.item3}>
                
                <div className={applicantStyles.fieldCol} >
                    <div className={applicantStyles.aboutLayout2}>
                        <h5>About me</h5>
                    </div>
                </div>
                <div className={applicantStyles.fieldCol} >
                    <div className={applicantStyles.aboutLayout}>
                    <textarea id="w3review" name="w3review" className={applicantStyles.texta} onChange={(e) => { setAbout(e.target.value)}} > </textarea>
                    </div>
                </div>
            </div>
         <div className={applicantStyles.item4}>
            <div>
                <input type="button" value="Register" className={applicantStyles.buton} onClick={submitApplication}></input>
            </div>
            <div>
                <input type="button" value="Cancel" className={applicantStyles.buton}></input>
            </div>
         </div>

      </div>
    </div>
    )
}

export default Applicant;