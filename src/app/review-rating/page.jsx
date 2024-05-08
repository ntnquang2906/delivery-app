import React from 'react';
import Image from 'next/image';
import rating_starts from '@/assets/rating_starts.png';

const RatingPage = () => {
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
            <main
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '0 0 8px 8px',
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
                    width: '500px',
                    margin: '0 auto',
                }}
            >
                <h2 style={{ color: '#4CAF50', marginBottom: '20px' }}>
                    RATING
                </h2>
                <div
                    style={{
                        border: '1px solid #ccc',
                        padding: '20px',
                        borderRadius: '4px',
                        width: '100%',
                    }}
                >
                    <h3 style={{ margin: 0, marginBottom: '10px' }}>Summary order:</h3>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gridGap: '10px',
                        }}
                    >
                        <p style={{ margin: 0 }}>1 x nachos</p>
                        <p style={{ margin: 0 }}>1 x burrito</p>
                        <p style={{ margin: 0 }}>1 x coke</p>
                        <p style={{ margin: 0, fontWeight: 'bold' }}>
                            Total: 42 AUD + 0.6 AUD (service fee)
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '20px',
                        }}
                    >
                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0, marginBottom: '10px' }}>
                                Restaurant rating:
                            </h3>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Image
                                    src={rating_starts}
                                    alt="star"
                                    width={100}
                                    height={70}
                                />
                            </div>
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0, marginBottom: '10px' }}>
                                Feedback:
                            </h3>
                            <textarea
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    border: '1px solid #ccc',
                                    padding: '8px 12px',
                                    borderRadius: '4px',
                                    fontSize: '16px',
                                    resize: 'none',
                                }}
                                placeholder="Enter your feedback here"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                        width: '100%',
                    }}
                >
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
                        SUBMIT RATING
                    </button>
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
                        BACK TO HISTORY
                    </button>
                </div>
            </main>
        </div>
    );
};

export default RatingPage;