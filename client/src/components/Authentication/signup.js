import React from "react";
import axios from "axios";
import { Formik } from "formik";

function Signup() {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={values => {
          axios({
            method: "post",
            url: "http://localhost:3001/api/signup",
            data: values
          }).then(response => console.log(response));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="firstName"
              name="firstName"
              placeholder="Rob"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <br />
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="lastName"
              name="lastName"
              placeholder="Delany"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="rob@delany.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <br />
            {errors.email && touched.email && errors.email}
            <label htmlFor="password"> Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
