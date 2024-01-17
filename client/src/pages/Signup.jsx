import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../utils/mutations";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

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
    <body className="gradient-section">
      <Nav />
      <div className="login-body">
        <div className="login-wrapper">
          <form className="login-form" onSubmit={handleFormSubmit}>
            <h1>Create an Account</h1>          
            <div className="input-box">
              <input
                className="login-input"
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
                className="login-input"
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
                className="login-input"
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
                className="login-input"
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
                className="login-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={handleChange}
              />
            </div>

            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
            </div>

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </body>
  );
}
export default Signup;
