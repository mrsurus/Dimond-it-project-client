import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return <Navbar  className='mb-5' bg="success" expand="lg" >
        <Container fluid>
            <Navbar className='text-white ms-3 h2' style={{fontWeight:'bolder'}}>Daimond It</Navbar>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                ></Nav>
                <div className=" me-5 d-lg-flex  ">
                    <Link to='/' className='text-white text-decoration-none mx-2 d-block'> Home</Link>
                    <Link to='/course' className=' text-white text-decoration-none mx-2 d-block'>Course</Link>
                    <Link to='/faq' className='text-white text-decoration-none mx-2 d-block' >FAQ</Link>
                    <Link to='/blog' className='text-white text-decoration-none mx-2 d-block'>Blog</Link>
                    <Link to='/login' className='text-white text-decoration-none mx-2 d-block'>LogIn</Link>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
export default Header;