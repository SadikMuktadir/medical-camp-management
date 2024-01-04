import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { loadStripe } from "@stripe/stripe-js";
const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Publishable_KEY);
  return (
    <div>
      <div className="mt-[50px]">
        <p className="text-center text-[40px]">Payment</p>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOutFrom />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
