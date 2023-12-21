import React from 'react';

const SellerServices = () => {
    const containerStyle = {
        whiteSpace: 'nowrap',
        overflowX: 'auto', // Add horizontal scroll for smaller screens
        margin: '0 auto',
        marginLeft: '60px', // Adjusted margin-left to utilize all available space
    };

    const serviceContainerStyle = {
        display: 'inline-block',
        margin: '0 10px', // Add spacing between services
        padding: '15px', // Adjusted padding
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '250px', // Adjusted width
        verticalAlign: 'top', // Align containers at the top
    };

    const serviceImageStyle = {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '10px',
    };

    const serviceNameStyle = {
        color: '#333',
        fontSize: '16px', // Adjusted font size
        fontWeight: 'bold',
        marginBottom: '8px', // Adjusted margin
    };

    const serviceDescriptionStyle = {
        color: '#666',
        fontSize: '12px', // Adjusted font size
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sell Your Old Devices Now</h2>

            {/* Buy Phone Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/builder/cd13764b153e46e19f9c6551ee52b5e6.webp?p=default&s=lg"
                    alt="Buy Phone"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Sell Phone</h3>
                <p style={serviceDescriptionStyle}>
                    Explore our collection of the latest smartphones.
                </p>
            </div>

            {/* Sell Phone Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/builder/bdd27d377ce34bb0b73c8f1b4a860bbd.webp?p=default&s=lg"
                    alt="Sell Phone"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Sell Camera</h3>
                <p style={serviceDescriptionStyle}>
                    Upgrade and get the latest smartphones.
                </p>
            </div>

            {/* Repairs Devices Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/builder/b6a95f2838184c9889711ea20f6ff468.webp?p=default&s=lg"
                    alt="Repairs Devices"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Smart watch</h3>
                <p style={serviceDescriptionStyle}>
                    Reliable device repair services.
                </p>
            </div>

            {/* Earbuds Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/builder/a12ac14b386b4b5286d424a83db4cad5.webp?p=default&s=lg"
                    alt="Earbuds"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Tablet</h3>
                <p style={serviceDescriptionStyle}>
                    High-quality earbuds for an immersive audio experience.
                </p>
            </div>

            {/* Speaker Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/builder/e6ba507509994216936925bdfeb6cfa8.webp?p=default&s=lg"
                    alt="Speaker"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Sell Laptop</h3>
                <p style={serviceDescriptionStyle}>
                    High-quality speakers for an immersive audio experience.
                </p>
            </div>
        </div>
    );
};

export default SellerServices;
