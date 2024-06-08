import * as Yup from 'yup';

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#;:])[A-Za-z\d@$!%*?&#;:]{8,}$/;

  const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const signIn = Yup.object({
    email: Yup.string().email('Invalid Email Address').required('required'),
    password: Yup.string().min(6, 'Password must contain at least 6 characters!').max(12, 'Your password must not exceed 12 characters!').required('required')
});

export const signUp = Yup.object({
    email: Yup.string().email('Enter Your E-mail Address').matches(emailRegExp, 'Invalid E-mail Address').required('required'),
    fullName: Yup.string().required('required'),
    password: Yup.string().min(6, 'Password must contain at least 6 characters!').matches(passwordRegExp, 'characters with at least one of each: uppercase, lowercase, number and special').required('required')
});