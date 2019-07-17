import * as React from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { withFormik, FormikErrors, FormikProps } from 'formik';
import { validationSchema } from '@abb/common'


// value for forms.item
const FormItem = Form.Item;

// styles 
const styles = {
    container: {
        margin: '0 auto',
        width: 500,
        marginTop: '4rem'

    },
    invalidColor: {
        color: 'red'
    }


}
interface FormValues {
    email: string;
    password: string;
}
interface Props {
    submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}
class C extends React.PureComponent<FormikProps<FormValues> & Props> {

    render() {
        const { values, handleChange, handleSubmit, handleBlur, touched, errors } = this.props
        console.log(errors)
        return (
            <form style={styles.container} onSubmit={handleSubmit}>
                <div >
                    <FormItem help={touched.email && errors.email ? errors.email : ""} validateStatus={touched.email && errors.email ? "error" : ""}>

                        <Input
                            name="email"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />

                    </FormItem>
                    <FormItem help={touched.password && errors.password ? errors.password : ""} validateStatus={touched.password && errors.password ? "error" : ""}>

                        <Input
                            name="password"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Password"
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}



                        />

                    </FormItem>
                    <FormItem>
                        <a className="login-form-forgot" href="">Forgot password</a>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Register Now
                      </Button>
                    </FormItem>
                    <FormItem>
                        Or <a href="">Login </a>
                    </FormItem>
                </div>
            </form>
        )
    }

}



export const RegisterView = withFormik<Props, FormValues>({
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    mapPropsToValues: () => ({ email: '', password: '' }),
    handleSubmit: async (values, { props, setErrors }) => {
        const errors = await props.submit(values);
        if (errors) {
            setErrors(errors);
        }
    }
})(C);