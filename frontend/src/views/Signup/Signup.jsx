import React from 'react';
import {useForm} from 'react-hook-form';
import './Signup.css';

const Signup = () => {
    const {register,handleSubmit,errors, formState}=useForm();
    const onSubmit =data=>console.log(data);
    const {isSubmitting}=formState;
    console.log(errors)
    return (
        <form id="login-box" onSubmit={handleSubmit(onSubmit)}>
  <div className="left">
    <h1>Sign up</h1>
    
    <input type="text" name="username" ref={register({required:true})}placeholder="Username" />
    {errors.username && <p className="alert">This field is required</p>}
    <input type="text" name="email" ref={register({required:true})}placeholder="E-mail" />
    {errors.email && <p className="alert">This field is required</p>}
    <input type="password" name="password" ref={register({required:true})}placeholder="Password" />
    <input type="password" name="password2" ref={register({required:true})}placeholder="Retype password" />
    {errors.password && <p className="alert">This field is required</p>}
    <input type="submit" disabled={isSubmitting} name="signup_submit" value="Sign me up" />
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
