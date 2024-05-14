"use client"
import React, { useState } from 'react';
import OrderTrackingPage from '@/components/OrderTracking';
import Link from 'next/link'

const PersonalInformation = () => {
    const [activeTab, setActiveTab] = useState('orderHistory');
    const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCancelMembership = () => {
        setShowCancelConfirmation(true);
    };

    const handleConfirmCancel = () => {
        // Perform the necessary actions to cancel the membership
        console.log('Membership cancelled successfully');
        setShowCancelConfirmation(false);
    };

    const handleCancelCancel = () => {
        setShowCancelConfirmation(false);
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div
                style={{
                    backgroundColor: '#f2f2f2',
                    padding: '20px',
                    borderRight: '1px solid #ccc',
                }}
            >
                <h3>User Menu</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li
                        style={{
                            cursor: 'pointer',
                            padding: '10px 0',
                            borderBottom: '1px solid #ccc',
                            fontWeight: activeTab === 'orderHistory' ? 'bold' : 'normal',
                        }}
                        onClick={() => handleTabClick('orderHistory')}
                    >
                        Order History
                    </li>
                    <li
                        style={{
                            cursor: 'pointer',
                            padding: '10px 0',
                            borderBottom: '1px solid #ccc',
                            fontWeight: activeTab === 'membershipStatus' ? 'bold' : 'normal',
                        }}
                        onClick={() => handleTabClick('membershipStatus')}
                    >
                        Membership Status
                    </li>
                </ul>
            </div>
            <div style={{ flex: 1, padding: '20px' }}>
                {activeTab === 'orderHistory' && (
                    <OrderTrackingPage />
                )}
                {activeTab === 'membershipStatus' && (
                    <div>
                        <h2>Membership Status</h2>
                        <p>Your current membership status is: Active</p>
                        <div style={{ marginTop: '20px' }}>
                            <Link href='/membership'>
                                <button
                                    style={{
                                        backgroundColor: '#4CAF50',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px 20px',
                                        borderRadius: '4px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                    }}
                                >
                                    Register for Membership
                                </button>
                            </Link>
                            <button
                                style={{
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    marginLeft: '10px',
                                }}
                                onClick={handleCancelMembership}
                            >
                                Cancel Membership
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {showCancelConfirmation && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1,
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '4px',
                            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                        }}
                    >
                        <h3>Confirm Cancellation</h3>
                        <p>Are you sure you want to cancel your membership?</p>
                        <div style={{ marginTop: '20px', textAlign: 'right' }}>
                            <button
                                style={{
                                    backgroundColor: '#f44336',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                    marginRight: '10px',
                                }}
                                onClick={handleConfirmCancel}
                            >
                                Confirm
                            </button>
                            <button
                                style={{
                                    backgroundColor: '#ccc',
                                    color: '#333',
                                    border: 'none',
                                    padding: '10px 20px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontSize: '16px',
                                }}
                                onClick={handleCancelCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonalInformation;