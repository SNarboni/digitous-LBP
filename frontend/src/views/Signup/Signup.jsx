import React, { useRef, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";

import './Signup.css';

const Signup = () => {
    const { register, errors, handleSubmit, watch, formState } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");
    const history = useHistory();


    const onSubmit =async (data)=>{
    
            delete data.password_repeat;
            console.log('Received values of form: ', data);
            fetch('http://localhost:8000/signup', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then((response)=>{return response.json()})
            
            .then((response)=>{ 
              console.log(response)
              // if (response) {
              //   const tokenObj = await response.json();
              //   localStorage.setItem('token', tokenObj.token);
              // //   history.push('/');
              // }
            }) 
    };
    const {isSubmitting}=formState;
    // console.log(onSubmit)
    return (
        <form id="login-box" onSubmit={handleSubmit(onSubmit)}>
  <div className="left">
    <h1>Sign up</h1>
    {/* <input type="file" name="image" ref={register({required:true})}placeholder="upload your profile picture" />
    {errors.image && <p className="alert">This field is required</p>} */}
    <input type="text" name="name" ref={register({required:true})}placeholder="name" />
    {errors.username && <p className="alert">This field is required</p>}
    <input 
        type="text" 
        name="email" ref={register({
        required:true,pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Enter a valid e-mail address",
    }})}
    placeholder="E-mail" 
    />

    {errors.email && <p className="alert">{errors.email.message}</p>}
    <input
        name="password"
        type="password"
        ref={register({
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
        placeholder="Password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input
        name="password_repeat"
        type="password"
        ref={register({
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
        placeholder="Repeat password "
      />
      {errors.password_repeat && <p>{errors.password_repeat.message}</p>}

    <input type="submit" disabled={isSubmitting} name="signup_submit" value="Sign me up" onClick={handleSubmit(onSubmit)} />
  </div>
  
  {/* <div className="right">
    <span className="loginwith">Sign in with<br />social network</span>
    
    <button className="social-signin facebook">Log in with facebook</button>
    <button className="social-signin twitter">Log in with Twitter</button>
    <button className="social-signin google">Log in with Google+</button>
  </div> */}
  {/* <div className="or">OR</div> */}
</form>
    )
}

export default Signup
