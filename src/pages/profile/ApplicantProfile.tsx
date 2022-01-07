import { NextPage } from "next";
import EmployeeExperience from '../../components/profile/EmployeeExperience';

// import orderFormStyles from "../../styles/orders/OrderForm.module.scss";

const ProfilePage: NextPage = () => {
  return (
    <div className="order-form-container">
      <EmployeeExperience />
    </div>
  );
};

export default ProfilePage;