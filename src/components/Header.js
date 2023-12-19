import React from 'react';

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <span>Soni Hardware & Software Company</span>
                <div className="d-flex align-items-center" style={{ width: '50%' }}>
                    <form className="d-flex" style={{ width: '100%' }} role="search">
                        <input
                            className="form-control flex-grow-1 mr-2" // Added mr-2 for right margin
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
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
        </nav>
    );
};

export default Header;
