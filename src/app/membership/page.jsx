import React from 'react';

const MembershipRegistration = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                backgroundColor: '#f2f2f2',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    borderRadius: '8px 8px 0 0',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                }}
            >
                <h2 style={{ margin: 0 }}>MEMBERSHIP REGISTRATION</h2>
            </header>
            <main
                style={{
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '0 0 8px 8px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                    width: '500px',
                    margin: '0 auto',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: '20px',
                    }}
                >
                    <div>
                        <label htmlFor="fullName" style={{ display: 'block', marginBottom: '5px' }}>
                            Full name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="dateOfBirth" style={{ display: 'block', marginBottom: '5px' }}>
                            Date of Birth
                        </label>
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gridGap: '10px',
                            }}
                        >
                            <input
                                type="text"
                                id="dateOfBirth"
                                placeholder="DD"
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                }}
                            />
                            <input
                                type="text"
                                id="dateOfBirth"
                                placeholder="MM"
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                }}
                            />
                            <input
                                type="text"
                                id="dateOfBirth"
                                placeholder="YYYY"
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="address" style={{ display: 'block', marginBottom: '5px' }}>
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            placeholder="Enter your address"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="gender" style={{ display: 'block', marginBottom: '5px' }}>
                            Gender
                        </label>
                        <input
                            type="text"
                            id="gender"
                            placeholder="Enter your gender"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '5px' }}>
                            Phone number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            placeholder="Enter your phone number"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                    <div>
                        <label htmlFor="state" style={{ display: 'block', marginBottom: '5px' }}>
                            State
                        </label>
                        <input
                            type="text"
                            id="state"
                            placeholder="Enter your state"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px',
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}
                >
                    <div style={{ flex: 1 }}>
                        <p style={{ margin: 0 }}>12000 already enrolled</p>
                    </div>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                        <button
                            type="submit"
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
                            Proceed
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MembershipRegistration;