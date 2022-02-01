import { NextPage } from "next";
import EmployeeExperience from '../../components/profile/EmployeeExperience';

const ProfilePage: NextPage = () => {
  return (
    <div className="order-form-container">
      <EmployeeExperience />
    </div>
  );
};

export default ProfilePage;