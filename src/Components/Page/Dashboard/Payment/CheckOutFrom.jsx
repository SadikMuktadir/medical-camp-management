import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useData from "../../../../Hooks/useData";
import { AuthContext } from "../../../Auth/AuthProvider";

const CheckOutFrom = () => {
  const { user } = useContext(AuthContext);
  const [tranId, setTranId] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [item] = useData();
  const totalPrice = item.reduce((total, items) => total + items.campFees, 0);
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure.post("/create-payment-intent", { campFees:totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

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
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
      setSuccess("Payment Successfully");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log(paymentIntent);
    }
    if (paymentIntent.status === "succeeded") {
      console.log(paymentIntent);
      setTranId(paymentIntent.id);


      // Send data to server
      const payments = {
        email:user.email,
        campFees:totalPrice,
        transactionId:paymentIntent.id,
        date:new Date(),
        itemId:item.map(data=>data._id),
        newItemId:item.map(data=>data.newId),
        status:"pending"
      }
      const res = await axiosSecure.post("/payments",payments);
    console.log(res.data);
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
        <div>
          <p className="text-black text-[20px] font-semibold">transaction Id: <span className="text-[#8D5CF6]">{tranId}</span></p>
        </div>
      </form>
    </div>
  );
};

export default CheckOutFrom;
