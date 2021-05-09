//Formik built in classes & Yupp

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const EasyForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(10, "not more than 10")
          .min(4, "not less than 4")
          .required("Required"),
        email: Yup.string().email().required("Required"),
      })}
      onSubmit={(values) => alert(JSON.stringify(values, null))}
    >
      <Form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" />
        <Field type="email" name="email" />
        <ErrorMessage name="email" />
        <button type="submit"> Submit</button>
      </Form>
    </Formik>
  );
};
export default EasyForm;
