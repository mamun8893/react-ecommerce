import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfully Complete");
  };
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JvmiZFPyddstvXsUR1vL5ZMYj8ujwgYqJ4cQXsrEyuCIBVws8yOulCqqj0S1DVxvq3ccAb80TaZ7p9ODr2TpU8z00D2xJ8JTI";
  return (
    <div className="stripe-btn-warp">
      <StripeCheckout
        label="Pay Now"
        name="BD Clothing Ltd"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your Total Price is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishablekey}
      />
    </div>
  );
};

export default StripeButton;
