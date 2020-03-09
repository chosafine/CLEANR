import React from "react";
import axios from "axios";
import { Formik } from "formik";

function Login() {
  return (
    <div>
      <Formik
        initialValues={{
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
            url: "http://localhost:3001/api/login",
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
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="email">Email:</label>
            <div class="col-sm-10">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="rob@delany.com"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <small id="emailHelp" class="form-text text-muted">{errors.email && touched.email && errors.email}</small>
            </div>
            </div>
            <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="password">Password:</label>
            <div class="col-sm-10">
            <input
            className="form-control"
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            </div>
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
