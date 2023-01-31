import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Courses.css'

const Courses = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        
            <Row className='mt-5 mx-5 p-2 '>
                <Col md={4} className='border h-50 rounded shadow'  >
                    <div className ='w-75 mx-auto '>
                        {
                        data.map(c =>  <Link className='text-decoration-none  ' to={`/course/${c.id}`} key={c.id} ><Button className='my-5 d-block w-100 '>< p className='ms-0 h4'>{c.name}</p></Button> </Link>)
                    }
                    </div>
                    
                </Col>
                <Col className='text-left courses-body ' >
                   {
                    data.map(course => 
                    <CourseDetails 
                    key={course.id}
                    course={course}>

                    </CourseDetails>)
                   }
                </Col>
            </Row>

        
          
    );
};

export default Courses;