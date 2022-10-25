import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const CardDetails = () => {
    const data = useLoaderData()
    const {image, name, details, price,rating,id} = data ;
    return (
        <Container>
            <h2 className='text-center bg-success text-white py-4 rounded'>{name} is alawys a best choice</h2>
                 <Card style={{ width: '75%', margin:'auto' }} >
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title >{name}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <p>Rating: <b>{rating}</b></p>
                       <div className='d-flex justify-content-between'>
                       <h1>Price: {price}$</h1>
                        <Link to={`/premium/${id}`}><Button className='py-2' variant="danger">Go To Premium</Button></Link>
                       </div>
                    </Card.Body>
                 </Card>
        </Container>
    );
};

export default CardDetails;