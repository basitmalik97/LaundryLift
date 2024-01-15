import { useState } from "react";
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../utils/mutations';

import Footer from "../components/Footer";

import Auth from '../utils/auth';




function Signup(props) {

  const [formState, setFormState] = useState({ email: '', password: ''});
  const [registerUser] = useMutation(REGISTER_USER)

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await registerUser({
        variables: { 
            firstName: formState.firstName,
            lastName: formState.lastName,
            address: formState.address,
            email: formState.email, 
            password: formState.password
             },
      });
      const token = mutationResponse.data.addUser.token;
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
    <div className="gradient-section">
      <body className="login-body">
        <div className="login-wrapper">
          <form onSubmit={handleFormSubmit}>
            <h1>Create an Account</h1>
            <div className="input-box">
              <input type="text" placeholder="First Name" required onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Last Name" required onChange={handleChange} />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Address" required onChange={handleChange} />
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password" required onChange={handleChange} />
            </div>

            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </body>
      <Footer />
    </div>
  );
}
export default Signup;
