import React from 'react';
import useSignUpForm from './CustomHooks';


const Login = () => {
    /*
    const signup = () => {
        alert(`User Created!
               Name: ${inputs.firstName} ${inputs.lastName}
               Email: ${inputs.email}`);
      }
      */
    const {handleSubmit, handleInputChange, inputs} = useSignUpForm(signup);

    function signup() {
        console.log(inputs);
      }

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input type="text" name="firstName" value={inputs.firstName || ''} onChange={handleInputChange} required />
          <label>Last Name</label>
          <input type="text" name="lastName" value={inputs.lastName || ''} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password1"/>
        </div>
        <div>
          <label>Re-enter Password</label>
          <input type="password" name="password2"/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    )
  }
  export default Login;