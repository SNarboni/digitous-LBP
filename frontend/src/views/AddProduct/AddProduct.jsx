import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const wait = function (duration = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, duration);
  });
};

const AddProduct = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onTouched",
  });
  const { isSubmitting, isSubmitSuccessful } = formState;

  const history = useHistory();

  const onSubmit = async (data) => {
    await wait(2000);
    fetch("http://localhost:8000/AddProduct", {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      wait(3000).then(() => {
        history.push("/ProfilePage");
      });
    }
  }, [isSubmitSuccessful]);

  return (
    <form className="container py-5" onSubmit={handleSubmit(onSubmit)}>
      <h1>Ajouter un produit</h1>
      {isSubmitSuccessful && (
        <div className="alert alert-success d-flex justify-content-center align-items-center text-center">
          <div>
          <h1>L'article a bien été ajouté</h1>
          <p>Vous allez etre rediriger</p>
          </div>
        </div>
      )}
      <div className="row">
        <div className="col-md-6 form-group">
          <label htmlFor="name">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            ref={register({
              required: "vous devez entrer un nom",
            })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div className="col-md-6 form-group">
          <label htmlFor="price">price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            ref={register({ required: "vous devez entrer un prix" })}
          />
          {errors.price && <span>{errors.price.message}</span>}
        </div>
      </div>
      <div className="col-md-6 form-group">
        <label htmlFor="description">description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          ref={register({ required: "vous devez entrer une description" })}
        />
        {errors.description && <span>{errors.description.message}</span>}
      </div>
      <div className="col-md-6 form-group">
        <label htmlFor="city">city</label>
        <input
          type="text"
          className="form-control"
          id="city"
          name="city"
          ref={register({ required: "vous devez entrer une ville" })}
        />
        {errors.city && <span>{errors.city.message}</span>}
      </div>
      <button disabled={isSubmitting} className="btn btn-primary">
        Ajouter
      </button>
    </form>
  );
};

export default AddProduct;
