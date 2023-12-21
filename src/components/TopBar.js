
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const TopHeader = () => {
    // const [isScrolled, setIsScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrollTop = window.scrollY;
    //         setIsScrolled(scrollTop > 0);
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    // const headerStyle = {
    //     position: 'fixed',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     backgroundColor: isScrolled ? '#333' : 'transparent',
    //     transition: 'background-color 0.3s ease',
    //     zIndex: 1000,
    // };

    return (
        <>
            <Navbar bg="primary ">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <span style={{ color: '#fff' }}>Soni Hardware & Software Company</span>
                    <div className="d-flex align-items-center" style={{ width: '50%' }}>
                        <form className="d-flex ml-5" style={{ width: '100%' }} role="search">
                            <input
                                className="form-control flex-grow-1 mr-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-light" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="ml-auto mr-3">
                        <button className="btn btn-success" type="submit">
                            Login
                        </button>
                    </div>
                </div>
            </Navbar>

            <Navbar bg="blue" expand="lg" style={{ padding: '10px', marginBottom: '20px', borderBottom: '2px solid #ccc', }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Navbar bg="blue" expand="lg" style={{ padding: '10px', marginBottom: '20px', borderBottom: '2px solid #ccc' }}>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav style={{ margin: '0 50px' }}>
                                <NavDropdown title="All" id="all-dropdown">
                                    <NavDropdown.Item href="#all-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#all-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#all-more">More Options</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Sell Phone" id="sellphone-dropdown">
                                    <NavDropdown.Item href="#sellphone-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#sellphone-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#sellphone-more">More Options</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Buy Phone" id="buyphone-dropdown">
                                    <NavDropdown.Item href="#buyphone-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#buyphone-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#buyphone-more">More Options</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Find New Gadgets" id="new-gadgets-dropdown">
                                    <NavDropdown.Item href="#new-gadget-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#new-gadget-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#new-gadget-more">More Options</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Buy Laptop" id="buy-laptop-dropdown">
                                    <NavDropdown.Item href="#buy-laptop-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#buy-laptop-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#buy-laptop-more">More Options</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="My Store" id="my-store-dropdown">
                                    <NavDropdown.Item href="#my-store-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#my-store-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#my-store-more">More Options</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="More" id="more-dropdown">
                                    <NavDropdown.Item href="#more-option1">Option 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#more-option2">Option 2</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#more-more">More Options</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default TopHeader;
