import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Registation = () => {

    const handleSubmit =(e)=> {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;

    }
    return (
        <Form onSubmit={handleSubmit} className=' mx-auto border shadow py-5 px-3' style={{ width: '400px' }}>
        <h2>Please Log In</h2>
        <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
            <Form.Label>PhotoURL</Form.Label>
            <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
        </Form.Group>
        <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">

        </Form.Text>
        <Button className='my-2' variant="primary" type="submit">
            Register
        </Button>
        <Form.Text className="text-muted">
            <p>Already have an account? <Link to='/register'>please LogIn</Link> </p>
        </Form.Text>
        
    </Form>
        
      );
};

export default Registation;