import React from "react";
import axios from "axios";
import { Formik } from "formik";

function Signup(props) {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
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
            url: "/api/signup",
            data: values
          }) .then(res => {
              if (res.status === 200) {
                props.handleLogin();
              } else {
                const error = new Error(res.error);
                throw error;
              }
            })
            .catch(err => {
              console.error(err);
              alert("Error signing up please try again");
            });
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
              <label className="col-sm-2 col-form-label" htmlFor="firstName">
                First Name:
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="firstName"
                  name="firstName"
                  placeholder="Rob"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="lastName">
                Last Name:
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="lastName"
                  name="lastName"
                  placeholder="Delany"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="email">
                Email:
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="rob@delany.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <small id="emailHelp" className="form-text text-muted">
                  {errors.email && touched.email && errors.email}
                </small>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label" htmlFor="password">
                Password:
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
            </div>
           {errors.password && touched.password && errors.password}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
