import React from 'react';
import { Container } from 'react-bootstrap';
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
                    </div>
                </div>
                <div className='text-img'>
                    <img
                        className='w-100 rounded'
                        src="https://humanativaspa.it/wp-content/uploads/2021/05/HN_machine_learning_ist.jpg"
                        alt="" />
                </div>
            </div>
            <div style={{backgroundColor:'lightgrey'}}>
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