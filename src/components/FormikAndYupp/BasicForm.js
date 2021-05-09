//Formik with built in classes

import { Formik, Field, Form, ErrorMessage } from "formik";

const BasicForm = () => {
  let form = (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Email Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid Email";
        }

        if (!values.password) {
          errors.password = "password Required";
        } else if (values.password.length < 4) {
          errors.password = "too sort";
        }
        return errors;
      }}
      onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
    >
      <Form noValidate>
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="span" style={{ color: "red" }} />
        <br />
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" />
        <ErrorMessage
          name="password"
          component="span"
          style={{ color: "red" }}
        />
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );

  return (
    <>
      <h2>Simple Form with only Formik Components</h2>
      {form}
    </>
  );
};
export default BasicForm;
