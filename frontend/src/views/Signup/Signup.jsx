import React, { useRef } from 'react';
import {useForm} from 'react-hook-form';
import './Signup.css';

const Signup = () => {
    const { register, errors, handleSubmit, watch, formState } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit =async (data)=>{
        console.log(JSON.stringify(data));
        // try {
            
        //     delete data.password_repeat;
        //     console.log('Received values of form: ', data);
        //     const response = await fetch('place du server backend', {
        //       method: 'POST',
        //       headers: {
        //         'content-type': 'application/json'
        //       },
        //       body: JSON.stringify(data)
        //     });
        //     if (response.ok) {
        //       const tokenObj = await response.json();
        //       localStorage.setItem('token', tokenObj.token);
        //       history.push('/admin');
        //     }
        //   } catch (err) {
        //     console.error(err)
        // }
    };
    const {isSubmitting}=formState;
    // console.log(onSubmit)
    return (
        <form id="login-box" onSubmit={e => e.preventDefault()}>
  <div className="left">
    <h1>Sign up</h1>
    
    <input type="text" name="username" ref={register({required:true})}placeholder="Username" />
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
