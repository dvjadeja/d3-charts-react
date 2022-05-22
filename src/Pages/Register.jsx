import React, { useState } from "react";
import { Link } from "react-router-dom";
import registerImage from "../images/mydashllc.png";
import useForm from "../Hooks/useForm";

const Register = () => {
  const { handleChange, errors } = useForm();
  const [checkBox, setCheckBox] = useState(false);
  console.log("Errors in Form", errors);
  return (
    <>
      <div className="container">
        <div className="left-side">
          <div>
            <img src={registerImage} alt="registerImage" />
          </div>
          <div className="text-center">
            <h3>Choose a date range</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              fugiat hic aspernatur aliquam, sed dolorem ullam. Laborum magni
              nihil corporis provident est. Cupiditate, voluptate dignissimos.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="create-account">
            <h3>Create an Account</h3>
          </div>
          <div className="form-input">
            <label htmlFor="email">Your Email Address</label>
            <input type="email" name="email" id="" onChange={handleChange} />
            {errors.email && <h5>{errors.email}</h5>}
            <label htmlFor="password">Your password</label>
            <input
              type="password"
              name="password"
              id=""
              onChange={handleChange}
            />
            {errors.password && <h5>{errors.password}</h5>}
            <label htmlFor="confirmPassword">Confirm our password</label>
            <input
              type="password"
              name="confirmPassword"
              id=""
              onChange={handleChange}
            />
            {errors.confirmPassword && <h5>{errors.confirmPassword}</h5>}
            <label htmlFor="fullName">Your full Name</label>
            <input type="text" name="fullName" id="" onChange={handleChange} />
            {errors.fullName && <h5>{errors.fullName}</h5>}
            <label htmlFor="phoneNumber">Your phone number</label>
            <input
              type="number"
              name="phoneNumber"
              id=""
              onChange={handleChange}
            />
            {errors.phoneNumber && <h5>{errors.phoneNumber}</h5>}
          </div>

          <div className="terms">
            <div>
              <input
                type="checkbox"
                name="terms"
                id=""
                onChange={() => setCheckBox(!checkBox)}
              />
            </div>
            <div>
              <span>I read and agree Terms and Conditions</span>
            </div>
          </div>

          <div className="button">
            <Link to="/dashboard">
              {!checkBox ? (
                <button disabled style={{backgroundColor: '#bdbdbd'}}>Create Account</button>
              ) : (
                <button>Create Account</button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
