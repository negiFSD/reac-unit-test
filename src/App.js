// import logo from './logo.svg';
import { useState } from "react";
import validator from "validator";
import "./App.css";

function App() {
  const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("")
  const handleChange = (e) => {
   
    setSignUpInput({...signUpInput, [e.target.name]:e.target.value})
  };
  const handleClick = (e)=>{
    e.preventDefault()
    if(!validator.isEmail(signUpInput.email)){
      setError('the email you input is invalid')
    }
    else if (!validator.isStrongPassword(signUpInput.password)){
      setError('password not accepted')
    }
   
  }
  return (
    <div className="container my-5 w-50 ">
      <form>
        <div className="md-3 ">

          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={signUpInput.email}
            id="email"
            name="email"
            // aria-hidden="false"
           onChange={(e)=>handleChange(e)}
            className="form-control"
          ></input>

          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e)=>handleChange(e)}

            className="form-control"
            value={signUpInput.password}
          ></input>
          {/* <label htmlFor='confirm' className='form-label'>
        confirm Password
      </label> */}
          {/* <input type="password" id="confirm" name="confirm" className='form-control'></input> */}
        </div>
        {error&& <p className="text-danger">{error}</p>}
      <button type="submit" className="btn btn-primary mt-2" onClick={handleClick}>submit</button>
      </form>
    </div>
  );
}

export default App;
