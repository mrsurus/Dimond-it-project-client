import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetails = ({course}) => {
    const {name, image, details,id} = course;
    return (
        <Card style={{ width: '100%', color:'black'  }} className='shadow' >
            <Card.Img variant="top" src={image} />
            <Card.Body >
                <Card.Title >{name}</Card.Title>
                <Card.Text>
                    {details.slice(0,120) + '.....'}
                </Card.Text>
                <Link to={`/course/${id}`}><Button variant="primary">Details</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default CourseDetails;