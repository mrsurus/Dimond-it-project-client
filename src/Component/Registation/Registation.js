import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { authContext } from '../../AuthProvider/AuthProvider';

const Registation = () => {
    const [error, setError] = useState('')
    const { signUpWithEmailAndPassword, getProfileInfo } = useContext(authContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(name, photoURL)
        signUpWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setError('')
                form.reset()
                handleGetProfielInfo(name, photoURL)
                Swal.fire(
                    'Good job!',
                    'Registation successful',
                    'success'
                  )
            })
            .catch(err => setError(err.message))
    }

    const handleGetProfielInfo = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        getProfileInfo(profile)
            .then(() => { })
            .catch(err => console.log(err))
    }
    return (
        <Form onSubmit={handleSubmit} className=' mx-auto border shadow py-5 px-3' style={{ width: '400px' }}>
            <h2>Please Register</h2>
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
                <p className='text-danger'>{error}</p>
            </Form.Text>
            <Button className='my-2' variant="primary" type="submit">
                Register
            </Button>
            <Form.Text className="text-muted">
                <p>Already have an account? <Link to='/login'>please LogIn</Link> </p>
            </Form.Text>

        </Form>

    );
};

export default Registation;