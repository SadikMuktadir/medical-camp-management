import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutFrom = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
    //   console.log("[PaymentMethod]", paymentMethod);
      setError("");
      setSuccess("Payment Successfully");
    }
  };

  return (
    <div className="ml-4 ">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="my-4 btn btn-outline"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
        <div>
          <p className="text-red-500 text-[20px] font-semibold">{error}</p>
        </div>
        <div>
          <p className="text-green-500 text-[20px] font-semibold">{success}</p>
        </div>
      </form>
    </div>
  );
};

export default CheckOutFrom;
