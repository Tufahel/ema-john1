import React, { useContext } from 'react';
import './Shipment.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Shipment = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const onSubmit = data => {
    console.log('form submitted', data);
    const savedCart = getDatabaseCart();
    const orderDetails = { ...loggedInUser, products: savedCart, shipment: data, orderTime: new Date() };
    fetch('https://floating-garden-34216.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        processOrder();
        if (data) {
          processOrder();
          alert('your order placed successfully');
        }
      })
  }
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="row">
      <div className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input {...register("address", { required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input {...register("phone", { required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone number is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div className="col-md-6">
        <h2>Please Pay</h2>
        <ProcessPayment></ProcessPayment>
      </div>
    </div>
  );
};

export default Shipment;