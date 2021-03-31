import React from "react";
import { useForm } from "react-hook-form";


const wait = function (duration = 1000){
    return new Promise((resolve) => {
        window.setTimeout(resolve, duration)
    })
}

const AddProduct = () => {
  const { register, handleSubmit, formState, errors } = useForm({
      mode: 'onTouched'
  });
    const {isSubmitting, isSubmitted,isSubmitSuccessful} = formState

  const onSubmit = async (data) => {
    await wait(2000)
  };

  console.log(errors)

  return (
    <form className="container py-5" onSubmit={handleSubmit(onSubmit)}>
      <h1>Ajouter un produit</h1>
      {isSubmitSuccessful && <div className="alert alert-success d-flex justify-content-center align-items-center"><h1>Merci pour votre inscription</h1></div>}
      <div className="row">
        <div className="col-md-6 form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            ref={register({required : "vous devez entrer un nom d'utilisateur"})}
          />
            {errors.username && <span>{errors.username.message}</span>}
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="email">email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            ref={register({required : true})}
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          ref={register({required : true})}
        />
      </div>
      <button disabled={isSubmitting} className="btn btn-primary">Ajouter</button>
    </form>
  );
};

export default AddProduct;
