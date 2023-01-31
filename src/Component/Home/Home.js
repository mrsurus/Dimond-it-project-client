import React from 'react';
import { Button, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='body' >
                <div className='text-div'>
                    <div className='text-inner-div'>
                        <h1 className='text-primary' style={{ fontSize: '4rem' }}><span style={{ fontSize: '6rem' }}>D</span>aimond It</h1>
                        <h2>The Platform, Where you can learn everything you want.</h2>
                        <p>Explore our website so that you can know that what kind of service we
                            provide.Every course of our it is as stander as international.We believe that we provde the best service.</p>
                        <Link to='/course'><Button>Our Courses</Button></Link>
                    </div>
                </div>
                <div className='text-img'>
                    <img
                        className='w-100 rounded'
                        src="https://humanativaspa.it/wp-content/uploads/2021/05/HN_machine_learning_ist.jpg"
                        alt="" />
                </div>
            </div>

            <div className=" bg-dark text-white rounded" style={{margin: '0 87px 87px 87px', padding: '60px'}}>
                <h2 className="text-center my-5">Our Solution</h2>
                <div className="row g-5">
                    <div className="col-md-4">
                        <h3>Digital Solutions</h3>
                        <p>We offer cutting-edge digital solutions for your pharmacy needs. Our platform integrates with your current systems and streamlines your processes, making it easier for you to manage your business. </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Data Analytics</h3>
                        <p>Our data analytics solutions provide you with real-time insights into your business performance. You can track your sales, inventory levels, and customer data, giving you a clear understanding of your business and helping you make informed decisions. </p>
                    </div>
                    <div className="col-md-4">
                        <h3>Customer Engagement</h3>
                        <p>We understand the importance of customer engagement in the pharmacy industry. Our platform provides you with the tools to connect with your customers, including loyalty programs, email campaigns, and SMS messaging. </p>
                    </div>
                </div>
            </div>


            <div className=' rounded' style={{ backgroundColor: 'lightgrey', margin: `0 87px 32px 87px`, color: 'black' }}>
                <div className='body' >
                    <div className='text-img'>
                        <img
                            className='w-100 rounded'
                            src="https://michiganvirtual.org/wp-content/uploads/2019/11/blended-v-student-centered-learning-1024x581.jpg"
                            alt="" />
                    </div>
                    <div>
                        <div className='text-div'>
                            <div className='text-inner-div'>
                                <h1 className='text-primary' style={{ fontSize: '4rem' }}>Daimond It</h1>
                                <h2>The Platform, Where you can learn everything you want.</h2>
                                <p>Explore our website so that you can know that what kind of service we
                                    provide.Every course of our it is as stander as international.We believe that we provde the best service.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;