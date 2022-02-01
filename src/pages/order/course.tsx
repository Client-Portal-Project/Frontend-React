import { NextPage } from "next";
import OrderForm from "../../components/orders/OrderForm";


const course: NextPage = () => {
  return (
    <div className="order-form-container">
      <OrderForm />
    </div>
  );
};

export default course;
