import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../components/utils/validationSchema.ts';
import '../components/Login.css';

const LoginForm: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log('Login Successful', values);
    alert('Login Successful');
    if (values.rememberMe) {
      localStorage.setItem('email', values.email);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <label>
          <Field type="checkbox" name="rememberMe" />
          Remember Me
        </label>

        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
