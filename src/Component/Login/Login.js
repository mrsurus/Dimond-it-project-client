import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { authContext } from '../../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle,  } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const GoogleProvider = new GoogleAuthProvider()
    const GithubProvider = new GithubAuthProvider()
    const {googleSingIn,logInWithEmail,githubSingIn} = useContext(authContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const  handleGoogleSignIN =()=>{
        googleSingIn(GoogleProvider)
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(err => console.log(err))
    }

    const  handleGithubSignIn =()=>{
        githubSingIn(GithubProvider)
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate(from, {replace:true})
        })
        .catch(err => console.log(err))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmail(email, password)
        .then(res =>{
            const user = res.user;
            console.log(user);
            navigate(from, {replace:true})

        })
        .catch(err => console.log(err))
        
    }

    return (
        <Form onSubmit={handleSubmit} className=' mx-auto border shadow py-5 px-3' style={{ width: '400px' }}>
            <h2>Please Log In</h2>
            <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">

                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Text className="text-muted">

            </Form.Text>
            <Button className='my-2' variant="primary" type="submit">
                LogIn
            </Button>
            <Form.Text className="text-muted">
                <p>New to this site? <Link to='/register'>please Register</Link> </p>
            </Form.Text>
            <div className='d-flex justify-content-around'>
                <Button variant='success' onClick={handleGoogleSignIN}>LogIn with <FaGoogle></FaGoogle></Button>
                <Button variant='success' onClick={handleGithubSignIn}>LogIn with <FaGithub></FaGithub>  </Button>

            </div>
        </Form>
    );
};

export default Login;