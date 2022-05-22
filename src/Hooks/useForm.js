import  { useState } from "react";
import { omit } from "lodash";

const useForm = () => {
  //Form Fields
  const [values, setValues] = useState({});
  //Form Error
  const [errors, setErrors] = useState({});

  const validate = (event, name, value) => {
    switch (name) {
      case "fullName":
        if (value.length <= 4) {
          setErrors({
            ...errors,
            fullName: "Full Name should be atleast 5 Characters",
          });
        } else {
          let newObj = omit(errors, "fullName");
          setErrors(newObj);
        }
        break;
      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a Valid Email Address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "password":
        if (
          !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
        ) {
          setErrors({
            ...errors,
            password:
              "Password Chould Contain atleast 8 Characters and containing Uppercase, lowercase and numbers",
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
        }
        break;
      case "confirmPassword":
        if (values.password !== value) {
          setErrors({
            ...errors,
            confirmPassword: "Passwords are not same",
          });
        } else {
          let newObj = omit(errors, "confirmPassword");
          setErrors(newObj);
        }
        break;
      case "phoneNumber":
        if (value.length !== 10) {
          setErrors({
            ...errors,
            phoneNumber: "Incorrect Phone Number",
          });
        } else {
          let newObj = omit(errors, "phoneNumber");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  //Method to handle form input
  const handleChange = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.value;

    validate(event, name, val);

    setValues({
      ...values,
      [name]: val,
    });
  };
  return {
    values,
    errors,
    handleChange,
  };
};

export default useForm;
