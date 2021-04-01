import React,{ useState} from "react";
import { useForm } from "react-hook-form";
import "./Login.css";
import { useHistory } from "react-router-dom";


const Login = () => {
  const [wrongSubmit,setWrongSubmit]=useState();
  const { register, errors, handleSubmit, formState } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    delete data.password_repeat;
    console.log("Received values of form: ", data);
    fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })

      .then((response) => {
        console.log(response);
        if (response.message === "tien le token") {
          setWrongSubmit(null);
          localStorage.setItem("token", response.token);
          history.push("/");
          history.push(`/user/${response.id}`);
        }else {
          setWrongSubmit(response.message);
       }
      }).catch((error) =>{
        console.log(error)
      })
  };
  

  const { isSubmitting } = formState;

  return (
    <form id="login-box" onSubmit={handleSubmit(onSubmit)}>
      <div className="left">
        <h1>Login</h1>
        <input
          type="text"
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
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
              message: "Password must have at least 8 characters",
            },
          })}
          placeholder="Password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        {wrongSubmit && <p>{wrongSubmit}</p>}

        <input
          type="submit"
          disabled={isSubmitting}
          name="signup_submit"
          value="Sign me up"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
};

export default Login;
