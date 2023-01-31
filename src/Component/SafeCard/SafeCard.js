import React from 'react';
import { useLoaderData } from 'react-router-dom';


const SafeCard = () => {
    const data = useLoaderData();
    const {name, price, } = data;
    return (
        <div className='text-center' style={{margin: '120px 0 120px 0'}}>
            <h1>{name}</h1>
            <h3>Now you will be able to buy this course only at {price}$ </h3>
        </div>
    );
};

export default SafeCard;