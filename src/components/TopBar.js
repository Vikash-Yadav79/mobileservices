import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const TopBar = () => {
    return (
        <>
            <Navbar bg="blue" expand="lg" style={{ padding: '10px', marginBottom: '20px', borderBottom: '2px solid #ccc' }}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        "<img src="https://s3b.cashify.in/gpro/uploads/2022/03/26005839/Is-it-safe-to-sell-phone-on-Cashify.jpg" width="10px" height="500px" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="data:image/jpeg;base64,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" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://s3b.cashify.in/gpro/uploads/2022/03/26005839/Is-it-safe-to-sell-phone-on-Cashify.jpg" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default TopBar;
