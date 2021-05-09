import { useFormik } from 'formik';
import * as Yup from 'yup';
const FormWithYup = () => {
    const formik = useFormik({
        initialValues: { email: "",name:"" },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email').required('email required'),
            name:Yup.string().max(15,'write less than 15').min(4,'too sort').required('name required')
        }),
        onSubmit: (values) => (alert(JSON.stringify(values, null, 2)))

    })


    return (
        <>
            <form onSubmit={formik.handleSubmit}  noValidate>
                <label htmlFor="email" >Email</label>
                <input
                    id="email" name="email" type="email" placeholder="email"
                    onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ?formik.errors.email : null}
              {/* Reducing onchange,onblur,value */}
                <input id="name" type="text" {...formik.getFieldProps('name')} />
                {formik.touched.name && formik.errors.name ? formik.errors.name:null }
                <button type="submit" >Submit</button>
            </form>

        </>
    )
}
export default FormWithYup;