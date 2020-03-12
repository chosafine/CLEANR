import React from "react";
import axios from "axios";
import { Formik } from "formik";
import store from "../../utils/index";

class Signup extends React.Component {
  sendPayload = () => {
    const currentStore = store.getState();
    let postStore = {};

    for (const property in currentStore.items) {
      postStore[currentStore.items[property].name] =
        currentStore.items[property].text;
    }

    // THIS IS TEMPORARY FOR ONLY TESTING THE DATABASE REMOVE LATER
    // we do not have a userid or id system currently so for testing
    // we are
    postStore["id"] = Math.floor(Math.random() * 1000 + 1);

    axios
      .post("/api/cleaning", postStore, {
        headers: { "Content-Type": "application/json" }
      })
      .then(response => {
        // For testing purposes we're using vanilla javascript to redirect the
        // user. Ideally we'd use a more react native way of doing this.
        return (window.location.href = "/dashboard");
      });
  };

  render() {
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
            })
              .then(res => {
                if (res.status === 200) {
                  this.sendPayload();
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
              <h3>Sign Up</h3>
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
                className="btn btn-success"
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
}

export default Signup;
