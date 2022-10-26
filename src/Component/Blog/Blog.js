import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='text-center'>
            <div className='m-5  shadow border py-3  px-5 '>
                <h1>What is CORS?</h1>
                <p>CORS means ross-Origin Resource Sharing.It is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other
                     than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the
                      cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the 
                    HTTP method and headers that will be used in the actual request.The Cross-Origin Resource Sharing standard works by adding new HTTP headers that let servers describe which 
                    origins are permitted to read that information from a web browser.</p>
                
            </div>
            <div className='m-5  shadow border py-3  px-5 '>
                <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>The main reason for using firebase is implement authentication in website.Firebase is a Backend-as-a-Service (Baas). It provides developers with a variety
                     of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure.
                    Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.There are lots of firebase alternative like STYTCH, Ory, Supabase,
                     Okta, PingIdentity,Authress,Auth0 etc. </p>
            </div>
            <div className='m-5  shadow border py-3  px-5 '>
                <h1>How does pirvate route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the
                 protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have 
                 roles and permissions which give a user access to specific areas of the application.</p>
            </div>
            <div className='m-5  shadow border py-3  px-5 '>
                <h1>What is Node?How does it work?</h1>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be
                     handled concurrently. Upon each connection, the callback is fired,
                     but if there is no work to be done, Node.js will sleep.To handle asynchronous code, Node uses a callback-based system. Node functions and methods that will implement some asynchronous activity take a callback function. This callback will be 
                     called whenever the asynchronous operation has resolved. By convention, the first argument of this callback is an error placeholder. If an error occurred in the asynchronous operation occurred (trying to read a non-existent file, for example), the error argument
                      will be an Error object, but it will be null if no error occurs.</p>
            </div>
        </Container>
    );
};

export default Blog;