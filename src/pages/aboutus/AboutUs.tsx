import { NextPage } from "next";
import AboutUs from "../../components/aboutus/AboutUsComp";

import orderFormStyles from "../../styles/orders/OrderForm.module.scss";

const OrderCoursePage: NextPage = () => {
  return (
    <div className="order-form-container">
      <AboutUs />
    </div>
  );
};

export default OrderCoursePage;
