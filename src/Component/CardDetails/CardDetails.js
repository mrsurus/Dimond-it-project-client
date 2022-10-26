import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const CardDetails = () => {
    const data = useLoaderData()
    const {image, name, details, price,rating,id} = data ;

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current,
        documentTitle:'Course-details',
        onafterprint: ()=> alert('print succesfull')
    })
    return (
        <Container>
            <div>
            <div className='text-center bg-success text-white py-4 rounded'>
            <Button onClick={handlePrint}>Print This Page</Button>
                <p className='h2'>{name} is alawys a best choice</p>
                </div>
                 <Card ref={componentRef} style={{ width: '75%', margin:'auto' }} >
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
            </div>
            
        </Container>
    );
};

export default CardDetails;