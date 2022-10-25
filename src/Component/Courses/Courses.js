import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        
            <Row className='mt-5 mx-5 p-2 '>
                <Col md={4}  >
                    {
                        data.map(c =>  <Link to={`/course/${c.id}`} key={c.id} ><li className='my-5 h4'>{c.name}</li></Link>)
                    }
                </Col>
                <Col className='text-left' style={{display:'flex', flexWrap:'wrap', gap: 15,}}>
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