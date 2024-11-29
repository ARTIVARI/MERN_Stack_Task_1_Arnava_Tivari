import React,{useState} from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';


const validationSchema = Yup.object({
    username: Yup.string().required('Username is required').min(5, 'Too short!'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'It contain at least one A-Z letter')
      .matches(/[a-z]/, 'It contain at least one a-z letter')
      .matches(/\d/, 'It contain at least one digit 0-9')
      .matches(/[^a-zA-Z0-9]/g, 'Password must contain at least two @#$%& ')
      .test('two-symbols', 'Password must contain at least two symbols', (value) => {
          return (value.match(/[^a-zA-Z0-9]/g) || []).length >= 2; }),

  });

function Login() {

    const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log('Form Data:', values);
    setPopupVisible(true);
    // Optionally, you can hide the popup after a few seconds
    setTimeout(() => setPopupVisible(false), 3000);
  };

  return (
    <div>
    {isPopupVisible && (
        <div className="fixed top-0 left-0 right-0 mt-4 mx-auto max-w-sm bg-green-500 text-white text-center p-4 rounded">
          Form submitted successfully!
        </div>
      )}
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
        <div className="flex flex-col items-center  px-3 mx-auto md:h-full py-24">
                   
                   <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                           <h1 className="flex justify-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                               Sign in Page
                           </h1>
                           <div className="space-y-4 md:space-y-6" action="#">
                               <CustomInput label="Username" name="username" type="text" placeholder="Enter your username" />
                               <CustomInput label="Email" name="email" type="email" placeholder="Enter your email" />
                               <CustomInput label="Password" name="password" type="password" placeholder="Enter your password" />
                               
                               <button type="submit" disabled={isSubmitting} className="w-full text-white bg-yellow-600 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                               
                           </div>
                       </div>
                   </div>
            </div>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default Login