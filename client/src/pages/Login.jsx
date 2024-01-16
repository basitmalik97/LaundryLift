import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";

import Footer from "../components/Footer";

import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [loginUser, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await loginUser({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.loginUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
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
      <div className="login-body">
        <div className="login-wrapper">
          <form className="login-form" onSubmit={handleFormSubmit}>
            <h1>Login</h1>
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
              <a href="#" className="checkbox-a">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn">
              Login
            </button>

            <div className="register-link">
              <p>
                Don&#39;t have an account? <a href="/signup">Register</a>{" "}
              </p>
            </div>
            {error ? (
              <div>
                <p>The login was unsuccessful. Please try again.</p>
              </div>
            ) : null}
          </form>
        </div>
      </div>
      <Footer />
    </body>
  );
}
export default Login;
