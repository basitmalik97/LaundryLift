import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../utils/mutations";

import Footer from "../components/Footer";

import Auth from "../utils/auth";

function Signup(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [registerUser] = useMutation(REGISTER_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await registerUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        address: formState.address,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.registerUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <body className="">
      <div className="gradient-section">
        <div className="signup-wrapper">
          <form onSubmit={handleFormSubmit}>
            <h1>Create an Account</h1>
            <div className="input-box">
              <input className="login-input"
                type="firstName"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="lastName"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Address"
                required
                onChange={handleChange}
              />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn">
              Create Account
            </button>
          </form>
        </div>
        <Footer />
      </div>

    </body>
  );
}
export default Signup;
