import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <h1 className='text-center mb-5'>Frequently Asked Question</h1>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Do Programming Schools provide web development course?</Accordion.Header>
                            <Accordion.Body>
                                No, Programming Schools do not provide web development course.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>How long time need to finish a course?</Accordion.Header>
                            <Accordion.Body>
                                Approximately six months.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Programming Schools courses online or offline?</Accordion.Header>
                            <Accordion.Body>
                                Programming Schools courses are totally online courses.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What code should I learn first?</Accordion.Header>
                            <Accordion.Body>
                                Python is always recommended if you're looking for an easy and even fun programming language to learn first. Rather than having to jump into strict syntax rules, Python reads like English and is simple to understand for someone who's new to programming.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is the best programming language for problem solving?</Accordion.Header>
                            <Accordion.Body>
                                C++ is the most preferred language for competitive programming mainly because of its STL. Short for Standard Template Library, the STL is a collection of C++ templates to help programmers quickly tackle basic data structures and functions such as lists, stacks, arrays, etc.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header>What is the best programming language for web development?</Accordion.Header>
                            <Accordion.Body>
                                Without wasting any more of your time, here is a list of the best programming languages for web development, In the order of their importance and popularity.
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>TypeScript</li>
                                    <li>PHP</li>
                                    <li>Ruby</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header>What is the best programming language for beginners?</Accordion.Header>
                            <Accordion.Body>
                                JavaScript and Python, two of the most popular languages in the startup industry, are in high demand. Most startups use Python-based backend frameworks such as Django (Python), Flask (Python), and NodeJS (JavaScript). These languages are also considered to be the best programming languages to learn for beginners.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7">
                            <Accordion.Header>Is c++ hard to learn?</Accordion.Header>
                            <Accordion.Body>
                                C++ is known to be one of the most difficult programming languages to learn over other popular languages like Python and Java. C++ is hard to learn because of its multi-paradigm nature and more advanced syntax.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8">
                            <Accordion.Header>How long will C++ take to learn?</Accordion.Header>
                            <Accordion.Body>
                                How long will C++ take to learn?
                                Image result for is c++ hard to learn
                                If you're completely new to programming, it'll take at least 3 months to learn C++. That's working at least 2 to 3 hours each day. However, if you've programmed before, working at least an hour a day, it'll take 1 to 3 months to grasp the basics. And if you want to build mastery in C++, it'll take at least 2 years
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9">
                            <Accordion.Header>Is C++ harder than Python?</Accordion.Header>
                            <Accordion.Body>
                                Is C++ Harder Than Python? Yes, C++ is harder to learn and work with than Python . The biggest difference is that C++ has a more complex syntax to work with and involves more memory management than Python, which is both simple to learn and use. Python is considered a better beginner programming language.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10">
                            <Accordion.Header>What's the hardest coding language?</Accordion.Header>
                            <Accordion.Body>
                                C++. C++ is considered to be one of the most powerful, fastest, and toughest programming languages.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11">
                            <Accordion.Header>Is it worth learning a programming language?</Accordion.Header>
                            <Accordion.Body>
                                Being able to program gives you countless job opportunities. Technology is huge, and there are many job opportunities if you know how to code. Programmers are in high demand all over the world. You can become a freelancer and work freely.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Faq;