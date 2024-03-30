import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../Redux/CartSlice';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch('https://fakestoreapi.com/products');
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const dispatch = useDispatch();

    const handleAdd=(product)=>{
        dispatch(addItem(product));
    }

    return (
        <div className='my-container'>
            <div className="my-row">
                {loading && <p className='load'>Loading.....</p>}
                {products.map((item, index) => (
                    <div className='my-card' key={item.id}>
                        <img src={item.image} alt="" />
                        <h2>{item.title.slice(0, 25)}</h2>
                        <h5>{item.description.slice(0, 70)}...</h5>
                        <p>${item.price}</p>
                        <button type='button' className='btn btn-primary' onClick={()=> handleAdd(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
