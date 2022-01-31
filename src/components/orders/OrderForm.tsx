import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { FunctionComponent, useState } from "react";
import styles from "../../styles/orders/OrderForm.module.scss";
import CheckoutForm from "./CheckoutForm";

interface OrderFormData {
  technology: string;
  instructor: string;
  associates: number;
}
interface TeamData extends OrderFormData {}
/**
 * For now, this component will serve as the UI that a user will interact with to select a course and submit it for purchase on the order/course page.
 */
const OrderForm: FunctionComponent = () => {
  const promise = loadStripe(
    "pk_test_51JPsbPLwtPYhS8YtxHuEoznbYp0BdB8s6tcjCk8t0HmW9Xvq4tLd2lLJIPGvPULFbEAoS8tIPAfMliJ9gXChEQdP00GrGOwyjY"
  );

  // Setup the state that will act as our input values.  This data is what will be submitted when a user makes the comfirmation.
  const [formData, setFormData] = useState<OrderFormData>({
    technology: "",
    instructor: "",
    associates: 0,
  });
  const [teamListData, setTeamListData] = useState<TeamData[]>([]);

  const [userConfirmedCommit, setUserConfirmCommit] = useState(false);

  /**
   * This event is fired whenever a form field input value updates.  The formData state updates depending on which input field was changed.
   * @param e Change event object which allows the extraction of form data once the event is fired
   */
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement> // for input fields like textarea you can union the HTMLInputElement type
  ) => {
    const value = e.target.value; // The value of the option
    const name = e.target.name as keyof OrderFormData; // the name of the input field that was changed
    if (value === "") return; // ignore irrelavent values

    // assigment destructuring, use the original values of our state and overwrite the
    // formData property with the input field value that was just changed
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.MouseEvent) => {
    if (!userConfirmedCommit && teamListData.length > 0)
      setUserConfirmCommit(true);
  };

  const addToTeam = (e: React.MouseEvent) => {
    if (
      formData.technology.length &&
      formData.instructor.length &&
      formData.associates > 0
    )
      setTeamListData([...teamListData, formData]);
  };

  return (
    <div className={`container ${styles.container}`}>
      <div className="row">
        <div className="col-sm-12 col-md-8 mt-5">
          <div className={`${styles["info-box"]}`}>
            <h4>Select Your Employee Requirements</h4>
            <div className={styles["course-info-form-container"]}>
              <form>
                <div className="mb-3">
                  <label className="form-label">Career Category:</label>
                  <select
                    className="form-select"
                    name="technology"
                    id="tech-select"
                    value={formData.technology}
                    onChange={handleChange}
                  >
                    {}
                    <option value="">--Select A Category--</option>
                    <option value="net">.NET</option>
                    <option value="java">Java</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Education Requirement:</label>
                  <select
                    className="form-select"
                    name="instructor"
                    id="instructor-select"
                    value={formData.instructor}
                    onChange={handleChange}
                  >
                    <option value="">
                      --Select An Education Requirement--
                    </option>
                    <option value="john-doe">John Doe</option>
                    <option value="jane-doe">Jane Doe</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Number Employees Desired:
                  </label>
                  <br />
                  <input
                    type="number"
                    className={`${styles["form-text"]} form-control`}
                    name="associates"
                    id="associates-textbox"
                    value={formData.associates}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="btn rvtr-btn-primary"
                    type="button"
                    value="Add to Team"
                    onClick={addToTeam}
                  />
                  <br />
                  <small className="text-muted">
                    Each team reservation will require a $20 fee.
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col mt-5">
          <div className={`${styles["details-box"]} ${styles["info-box"]}`}>
            <h4>Additional details</h4>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-12 col-md-8 mt-5">
          <div className={styles["info-box"]}>
            <div>
              <h4>Your Team</h4>
              {teamListData.length > 0 ? (
                <ul id="teamMembers">
                  {teamListData.map((listItem, ind) => (
                    <li key={ind}>
                      <p>Tech: {listItem.technology} </p>
                      <p>Instructor: {listItem.instructor}</p>
                      <p>No. Associates: {listItem.associates}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  <small className="text-muted">Try adding some teams</small>
                </p>
              )}
            </div>
            <div>
              <button
                type="button"
                className="btn rvtr-btn-secondary"
                onClick={onSubmit}
              >
                Order
              </button>
            </div>
          </div>
        </div>
        <div className="col mt-5">
          <div className={`${styles["email-box"]} ${styles["info-box"]}`}>
            <h4>Email</h4>
          </div>
        </div>
      </div>
      {/* Render the checkout form if the user has clikced the commit button and there are items in the team list.
            Note: Once this component renders, a call will be made to the backend to create a PaymentIntent via stripe.
                  This current setup may need to be refactored for a production ready app.
        */}
      {userConfirmedCommit && teamListData.length > 0 ? (
        <div className="row">
          <div className="col">
            <Elements stripe={promise}>
              <CheckoutForm numCourses={teamListData.length} />
            </Elements>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default OrderForm;
