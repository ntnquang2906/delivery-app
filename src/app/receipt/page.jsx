import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import Link from 'next/link'

const OrderSubmittedPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#f2f2f2',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '8px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                    width: '500px',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                    }}
                >
                    <Image
                        src={logo}
                        alt="Order Submitted"
                        width={32} height={32}
                    />
                    <h2 style={{ color: '#4CAF50', margin: 0 }}>ORDER SUBMITTED</h2>
                </div>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: '20px',
                        marginBottom: '20px',
                    }}
                >
                    <div>
                        <p style={{ margin: 0 }}>ORDER NUMBER</p>
                        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
                            #1487691
                        </p>
                    </div>
                    <div>
                        <p style={{ margin: 0 }}>ESTIMATED TIME</p>
                        <p style={{ fontWeight: 'bold', margin: '5px 0' }}>
                            ~20 Mins
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '20px',
                        borderRadius: '4px',
                    }}
                >
                    <h3 style={{ margin: 0, marginBottom: '10px' }}>Tax Invoice</h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridGap: '10px',
                        }}
                    >
                        <p style={{ margin: 0 }}>Invoice Number:</p>
                        <p style={{ margin: 0 }}>Invoice Date:</p>
                        <p style={{ margin: 0 }}>Place of Supply:</p>
                        <p style={{ margin: 0 }}>HSN Code:</p>
                        <p style={{ margin: 0 }}>Tax Point Date:</p>
                        <p style={{ margin: 0 }}>Description</p>
                        <p style={{ margin: 0 }}>Net Amount</p>
                        <p style={{ margin: 0 }}>Date</p>
                        <p style={{ margin: 0 }}>Total cost</p>
                        <p style={{ margin: 0 }}>Service Fee</p>
                        <p style={{ margin: 0 }}>Discount</p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>Total net</p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20px',
                        }}
                    >
                        <img
                            src="/qr-code.png"
                            alt="QR Code"
                            style={{ width: '100px', height: '100px' }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    }}
                >
                    <Link href='/review-rating'>
                        <button
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            PROVIDE FEEDBACK
                        </button>
                    </Link>
                    <Link href='/explore-restaurant'>
                        <button
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            BACK TO HOMEPAGE
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default OrderSubmittedPage;