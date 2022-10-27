import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <>
            <Container>
                <h1 className='text-center my-5'>Blogs</h1>
                <div className='shadow rounded p-5 mb-5'>
                    <h3 className='text-center mb-5'>What is cors?</h3>
                    <p className='text-muted' style={{ textAlign: 'justify' }}>
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </p>
                </div>
                <div className='shadow rounded p-5 mb-5'>
                    <h3 className='text-center mb-5'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                    <p className='text-muted' style={{ textAlign: 'justify' }}>
                        <span className='fw-bold text-dark'>Using firebase because of:</span> The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                    </p>
                    <p className='text-muted' style={{ textAlign: 'justify' }}>
                        <span className='fw-bold text-dark'>Other options to implement authentication:</span> There are multiple ways available to implement authentication like Phone authentication, Multi-factor authentication,  Certificate-based authentication, Biometric authentication etc.
                    </p>
                </div>
                <div className='shadow rounded p-5 mb-5'>
                    <h3 className='text-center mb-5'>How does the private route work?</h3>
                    <p className='text-muted' style={{ textAlign: 'justify' }}>
                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.
                        If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                    </p>
                </div>
                <div className='shadow rounded p-5 mb-5'>
                    <h3 className='text-center mb-5'>What is Node? How does Node work?</h3>
                    <p className='text-muted' style={{ textAlign: 'justify' }}>
                        <span className='fw-bold text-dark'>What is Node:</span> Node is an open-source, cross-platform JavaScript runtime environment. Node.js is written in C, C++, and JavaScript, and it is built on the open-source V8 JavaScript engine which also powers JS in browsers such as Google Chrome.
                    </p>
                    <p className='text-muted' style={{ textAlign: 'justify' }}>
                        <span className='fw-bold text-dark'>How does Node work:</span> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concepts (Asynchronous, Non-blocking I/O).
                    </p>
                </div>
            </Container>
        </>
    );
};

export default Blog;