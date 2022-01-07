import { NextPage } from "next";
import OrderForm from "../../components/orders/OrderForm";

import orderFormStyles from "../../styles/orders/OrderForm.module.scss";

const OrderCoursePage: NextPage = () => {
  return (
    <div className="order-form-container">
      <OrderForm />
    </div>
  );
};

export default OrderCoursePage;
