import React from 'react';
import { useState } from "react";
import "./form.css"
import FormInput from './FormInput';
const Form = () => {
    const [values, setValues] = useState({
        companyname: "",
        entreprisedescription: "",
        facebooklink: "",
        instagramlink: "",
        linkedinlink: "",
        logolink: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    
      const inputs = [
        {id: 1,
        name: "companyname",
        type: "text",
        placeholder: "Company's name",
        label: "Company's name",
        required: true,
        },
        {id: 2,
            name: "entreprisedescription",
            type: "text",
            placeholder: "Entreprise Description",
            label: "Entreprise Description",
            required: true,
           },
        {
            id: 3,
            name: "facebooklink",
            type: "text",
            placeholder: "Facebook Link",
            label: "Facebook Link",
          },
          {id: 4,
            name: "instagramlink",
            type: "text",
            placeholder: "Instagram Link",
            label: "Instagram Link",
            required: true,
           },
           {id: 5,
            name: "linkedinlink",
            type: "text",
            placeholder: "Linkedin Link",
            label: "Linkedin Link",
            required: true,
           },
           {id: 6,
            name: "logolink",
            type: "text",
            placeholder: "Logo Link",
            label: "Logo Link",
            required: true,
           },
        {
          id: 7,
          name: "username",
          type: "text",
          placeholder: "Username",
          errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          label: "Username",
          pattern: "^[A-Za-z0-9]{3,16}$",
          required: true,
        },
        {
          id: 8,
          name: "email",
          type: "email",
          placeholder: "Email",
          errorMessage: "It should be a valid email address!",
          label: "Email",
          required: true,
        },
        {
          id: 9,
          name: "password",
          type: "password",
          placeholder: "Password",
          errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
          label: "Password",
          pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
          required: true,
        },
        {
          id: 10,
          name: "confirmPassword",
          type: "password",
          placeholder: "Confirm Password",
          errorMessage: "Passwords don't match!",
          label: "Confirm Password",
          pattern: values.password,
          required: true,
        },
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="form">
          <form className="editprofile-form" onSubmit={handleSubmit}>
            <h1>Edit Profile</h1>
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button>Submit</button>
          </form>
        </div>
      );
    };

export default Form;