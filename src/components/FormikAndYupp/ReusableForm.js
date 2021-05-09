import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const TextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
   
    return (
        <>
            <label htmlFor={props.id || props.name} >{label}</label>
            <input  {...field} {...props} />
            {meta.touched && meta.error ? meta.error : null}
        </>
    )
}
const MySelect = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
}
const ReusableForm = () => {

    return (
        <Formik
            initialValues={{ email: "", jobType: '' }}
            validationSchema={Yup.object({
                email: Yup.string().email().required("required"),
                jobType: Yup.string()
                    .oneOf(
                        ['designer', 'development', 'product', 'other'],
                        'Invalid Job Type'
                    )
                    .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  
                  alert(JSON.stringify(values, null, 2));
                 
                }, 400);
              }}
        >
            <Form>
                <TextInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                />
                <MySelect label="Job Type" name="jobType">
                    <option value="">Select a job type</option>
                    <option value="designer">Designer</option>
                    <option value="development">Developer</option>
                    <option value="product">Product Manager</option>
                    <option value="other">Other</option>
                </MySelect>
                <button type="submit" >Submit</button>
            </Form>
        </Formik>
    )
}
export default ReusableForm;
