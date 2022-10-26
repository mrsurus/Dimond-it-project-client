import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} =useContext(authContext)
    const [theme, setTheme] = useState(true)
    const handleLogOut =() => {
        logOut()
        .then(() => {
    
        })
        .catch(err => console.log(err))
        
      }
      const handleTheme =()=>{
        setTheme(!theme)
      }
    
    return <Navbar  className='mb-5' bg="success" expand="lg" >
        <Container fluid>
            <Navbar className='text-white ms-3 h2' style={{fontWeight:'bolder'}}>
                <FaCanadianMapleLeaf className=' me-1'></FaCanadianMapleLeaf>
                Daimond It</Navbar>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">

                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                ></Nav>
                <div className=" me-5 d-lg-flex align-items-center  ">
                    <Link to='/' className='text-white text-decoration-none mx-2 d-block'> Home</Link>
                    <Link to='/course' className=' text-white text-decoration-none mx-2 d-block'>Course</Link>
                    <Link to='/faq' className='text-white text-decoration-none mx-2 d-block' >FAQ</Link>
                    <Link to='/blog' className='text-white text-decoration-none mx-2 d-block'>Blog</Link>
                   {user?.uid? 
                   <><Image style={ {width:'40px',height:'40px',borderRadius:'50px'}} src={user.photoURL}></Image>
                   <Link onClick={handleLogOut} className='text-white text-decoration-none mx-2 d-block'>Log Out</Link>
                   </> 
                   :  <Link to='/login' className='text-white text-decoration-none mx-2 d-block'>LogIn</Link>}
                    <Button onClick={handleTheme}>{theme? <>DARK </> : <>LIGHT</> }</Button>
                </div>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}
export default Header;