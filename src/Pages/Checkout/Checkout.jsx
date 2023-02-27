import React from "react";
import CheckoutForm from "../../Components/CheckOut/Form/CheckoutForm";
import CheckoutProducts from "../../Components/CheckOut/Prodcuts/CheckoutProducts";
import { useSelector } from "react-redux";
import { CheckoutWrapper } from "./CheckoutStyle";

const Checkout = () => {
  const { cartItems, shippingCost } = useSelector((state) => state.cart);

  const price = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

  return (
    <>
      <CheckoutWrapper>
        <CheckoutForm
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        ></CheckoutForm>
        <CheckoutProducts
          cartItems={cartItems}
          shippingCost={shippingCost}
          price={price}
        />
      </CheckoutWrapper>
    </>
  );
};

export default Checkout;
