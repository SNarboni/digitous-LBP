import React from 'react';
import {useForm} from 'react-hook-form';
import './Login.css';


const Login = () => {
    const { register, errors, handleSubmit, formState } = useForm({});
    
        const onSubmit =data=>console.log(data);
        const {isSubmitting}=formState;
        console.log(onSubmit)
    return (
    <form id="login-box" onSubmit={e => e.preventDefault()}>
      <div className="left">
        <h1>Login</h1>
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
    
         
        <input type="submit" disabled={isSubmitting} name="signup_submit" value="Sign me up" onClick={handleSubmit(onSubmit)} />
      </div>
      

    </form>
        )
    }
    


export default Login
