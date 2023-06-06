import React, { useState } from "react";
import "./Support.scss";
import { PaystackButton } from "react-paystack";

const Support = () => {
  const publicKey = "pk_test_a4cb605a13c0e909763147eb34d81b80337e4f7f";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);
  const quantity = `${count}`;
  const amount = 50000 * count;
  console.log(process.env.PUBLIC_KEY);
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: "Pay for Coffee",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const Add = () => {
    setCount(count + 1);
  };
  const Minus = () => {
    setCount(count - 1);
  };
  return (
    <div className="support-container" id="coffee">
      <div className="support-wrapper">
        <h4>SUPPORT</h4>
        <p className="support-text">
          If you are impressed with FunLog and would love to support this
          project, you can buy me a coffee
        </p>
        <div className="coffee-form">
          <h5>Buy me a coffee</h5>
          <form className="coffee-data">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Name*"
            />{" "}
            <br />
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
            />
          </form>

          <div className="quantity-data">
            <button
              onClick={Minus}
              className="minus-coffee"
              disabled={count === 1 ? true : false}
            >
              -
            </button>
            <form>
              <input type="text" value={quantity} disabled />
            </form>
            <button onClick={Add} className="add-coffee">
              +
            </button>
            <br />
          </div>

          {!email || !name ? (
            <button disabled>Fill form to pay</button>
          ) : (
            <PaystackButton className="btn btn-primary" {...componentProps} />
          )}
        </div>

        <p className="support-or">OR</p>
        <p className="support-ref">Refer me for jobs:</p>
        <em className="support-em">kingsleyoyeokz@gmail.com</em>
      </div>
    </div>
  );
};

export default Support;
