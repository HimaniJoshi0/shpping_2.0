import React, { useEffect, useState } from 'react'
import './style.css'
import "./style.css"
import { Field, Formik, Form as FormikForm , ErrorMessage } from 'formik';
import { signUpSchema } from '../../../schema';

const Signup = () => {

  const[data , setData] = useState([]);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password:'',
    gender: '',

  };

  const store =(values)=>{
    const usedata = [...data, values]
    localStorage.setItem("userlogin",JSON.stringify(usedata))
  }
  
  useEffect(()=>{
   const userData = JSON.parse(localStorage.getItem("userlogin")) 
   console.log("user data stored in localstorage", userData)
   if(userData){
    console.log(userData)
    setData(userData)
   }
   else{
    console.log("no user data")
   }
   
  },[])
  return (
    <div  className='container'>
    <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log("hello");
         // console.log("values after sumit button" ,values);
          store(values);
        }}
      >

    <FormikForm>
          <div>
            <div>
              <div>
                <h1>Sign-up</h1>
              </div>
              <div>
                <Field type="text" name="name" placeholder="Your name" />
                <ErrorMessage name='name' component='p' className='errors' />
              </div>

              <div>
                <Field type="email" name="email" placeholder="Your email" />
                <ErrorMessage name='email' component='p' className='errors' />
              </div>

              <div>
                <Field type="password" name="password" placeholder="Your passsword" />
                <ErrorMessage name='password' component='p' className='errors' />
              </div>

              <div>
                <Field type="password" name="confirm_password" placeholder="confirm password" />
                <ErrorMessage name='confirm_password' component='p' className='errors' />
              </div>

              <div>
                  <label htmlFor='gender'>GENDER:</label>
                  <div className='inputs'>
                  <label>
                    <Field type='radio' name='gender' value='male' as="input"/>
                     MALE
                    </label>
                   
                    <label>
                    <Field type='radio' name='gender' value='female' as="input"/>
                    FEMALE
                    </label>
                    <ErrorMessage name='gender' component='p' className='errors' />
                  </div>
                </div>

              <div>
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>
        </FormikForm>
    </Formik>
    </div>
  )
}

export default Signup