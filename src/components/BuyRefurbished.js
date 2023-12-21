import React from 'react';

const BuyRefurbished = () => {
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
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Buy Refurbished Phones</h2>

            {/* Buy Phone Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/cashify/product/img/xxhdpi/bf8ed21e-96c9.jpg?p=es3sq&s=es"
                    alt="Buy Phone"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Apple iPhone 12 - Refurbished</h3>
                <p style={serviceDescriptionStyle}>
                    Explore our collection of the latest smartphones.
                </p>
            </div>

            {/* Sell Phone Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/cashify/product/img/xxhdpi/d8394bf8-e922.jpg?p=es3sq&s=es"
                    alt="Sell Phone"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Apple iPhone 11 - Refurbished</h3>
                <p style={serviceDescriptionStyle}>
                    Upgrade and get the latest smartphones.
                </p>
            </div>

            {/* Repairs Devices Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/cashify/product/img/xxhdpi/55237aff-b449.jpg?p=es3sq&s=es"
                    alt="Repairs Devices"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Apple iPhone XR - Refurbished</h3>
                <p style={serviceDescriptionStyle}>
                    Reliable device repair services.
                </p>
            </div>

            {/* Earbuds Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/cashify/product/img/xxhdpi/3f9faaa0-6bb8.jpg?p=es3sq&s=es"
                    alt="Earbuds"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Redmi 9 Power - Refurbisheds</h3>
                <p style={serviceDescriptionStyle}>
                    High-quality earbuds for an immersive audio experience.
                </p>
            </div>

            {/* Speaker Section */}
            <div style={serviceContainerStyle}>
                <img
                    src="https://s3no.cashify.in/cashify/product/img/xxhdpi/1a25f1fe-917c.jpg?p=es3sq&s=es"
                    alt="Speaker"
                    style={serviceImageStyle}
                />
                <h3 style={serviceNameStyle}>Redmi 10 Prime - Refurbishedr</h3>
                <p style={serviceDescriptionStyle}>
                    High-quality speakers for an immersive audio experience.
                </p>
            </div>
        </div>
    );
};

export default BuyRefurbished;
