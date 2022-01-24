import { NextPage } from "next";
import EmployeeInformation from "../../components/profile/EmployeeInformation";

const OrderCoursePage: NextPage = () => {
  return (
    <div className="order-form-container">
      <EmployeeInformation />
    </div>
  ) ;
};

export default OrderCoursePage;
