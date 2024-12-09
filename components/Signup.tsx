import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpSchema } from '../components/utils/validationSchema.ts';

const SignUpForm: React.FC = () => {
  const handleSubmit = (values: any) => {
    console.log('Sign Up Successful', values);
    alert('Sign Up Successful');
  };

  const checkPasswordStrength = (password: string) => {
    if (password.length < 8) return 'Weak';
    if (/^[a-zA-Z0-9]*$/.test(password)) return 'Medium';
    return 'Strong';
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={signUpSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" />
          <div>Password Strength: {checkPasswordStrength(values.password)}</div>
          <ErrorMessage name="password" component="div" />

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
