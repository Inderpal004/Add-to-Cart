import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../Redux/CartSlice';

export default function Cart() {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id));
    };

    return (
        <div className='my-container'>
            <h2>Cart Items</h2>
            <div className="cart-items">
                {
                    cartItems.length ? cartItems.map((item) => (
                        <div className='cart-item' key={item.id}>
                            <img src={item.image} alt="" />
                            <h5>{item.title}</h5>
                            <div className='flex'>
                            <h5>${item.price * item.quantity}</h5> 
                                <div className="quantity sm-flex">
                                    <button className="btn btn-primary" onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    <span className='mx-2'>{item.quantity}</span>
                                    <button className="btn btn-primary" onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                </div>
                            </div>
                            <button type='button' className='btn btn-danger' onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    )) : <p className='cart-p'>No Items to Display.</p>
                }
            </div>
        </div>
    );
}
