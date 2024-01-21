import React  from 'react'
import './style.css'
import { Field, Formik, Form , ErrorMessage } from 'formik';
import { signUpSchema } from '../../../schema';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate(); 
  const initialValues = {
    name: '',
    email: '',
  };
  

    const check=(values)=>{
    console.log("hiiii")
    const userData = JSON.parse(localStorage.getItem("formValues"))
  
    const containsValues = userData.some((user) => {
      return (
        user.name === values.name &&
        user.email === values.email
    
      );
    });

       if(containsValues){
        navigate('/home')
      }
      else{
        return(
          alert('Please enter valid credentials!')
        )
      }
  
  }  
  
 

  return (
    <div className='container'>
    <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          console.log("hello");
          check(values);
        }}
      >

      <Form>
          <div >
            <div>
              <div>
                <h1>Log-in</h1>
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
                <button type="submit">Submit</button>
              </div>
            </div>
          </div>

        </Form>
    </Formik>
    </div>
  )
}

export default Login