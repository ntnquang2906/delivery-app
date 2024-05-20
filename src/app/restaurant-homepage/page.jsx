// pages/menu.js
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets.jsx';
import { logo } from '@/styles/Navbar.module.css';

const RestaurantManager = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleAccept = () => {
        // Implement the logic to accept the order
        console.log('Accepting order...');
    };

    const handleDecline = () => {
        // Implement the logic to decline the order
        console.log('Declining order...');
    };

    return (
        <div>
            <style jsx>{`
        .navbar {
          background-color: #689767;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }
        .navbar-content {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          margin-left: 1rem;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr 3fr;
          grid-gap: 2rem;
          padding: 2rem;
          background-color: #fff;
          height: calc(100vh - 4rem); /* Subtract the navbar height */
        }
        .sidebar {
          background-color: #E8F1E8;
          padding: 1rem;
          border-radius: 4px;
          height: 100%; /* Fill the entire left side */
          overflow-y: auto; /* Add vertical scrolling if needed */
        }
        .sidebar h2 {
          color: #333;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .sidebar button {
          display: block;
          width: 100%;
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 1rem;
        }
        .sidebar button.active {
          background-color: #0056b3;
        }
        .content {
          background-color: #fff;
          padding: 1rem;
          border-radius: 4px;
          height: 100%; /* Fill the entire right side */
          display: flex;
          flex-direction: column;
          overflow-y: auto; /* Add vertical scrolling if needed */
        }
        .content h2 {
          color: #333;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .content-inner {
          flex-grow: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .order-request {
          background-color: #E8F1E8; /* Set the background color to #E8F1E8 */
          padding: 1rem;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center; /* Vertically center the content */
        }
        .order-request p {
          margin-bottom: 0;
        }
        .content-actions {
          display: flex;
        }
        .content-actions button {
          background-color: #007bff;
          color: #fff;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          margin-left: 0.5rem;
        }
        .content-actions button.decline {
          background-color: #ff0000; /* Red background for the decline button */
        }
      `}</style>
            <div className="navbar">
                <div className="logo-container">
                    <Image src={assets.logo} width={50} height={50} alt="" className={logo} />
                </div>
                <div className="navbar-content">
                    <h1>Restaurant Management</h1>
                </div>
            </div>
            <div className="container">
                <div className="sidebar">
                    <button
                        onClick={() => handleOptionClick('orderRequest')}
                        className={selectedOption === 'orderRequest' ? 'active' : ''}
                    >
                        Order request
                    </button>
                    <button
                        onClick={() => handleOptionClick('editMenu')}
                        className={selectedOption === 'editMenu' ? 'active' : ''}
                    >
                        Edit Menu
                    </button>
                    <button
                        onClick={() => handleOptionClick('manageInfo')}
                        className={selectedOption === 'manageInfo' ? 'active' : ''}
                    >
                        Manage information
                    </button>
                </div>
                <div className="content">
                    <div className="content-inner">
                        {selectedOption === 'orderRequest' && (
                            <>
                                <div className="order-request">
                                    <p>Name</p>
                                    <div className="content-actions">
                                        <button onClick={handleAccept}>Accept</button>
                                        <button onClick={handleDecline} className="decline">Decline</button>
                                    </div>
                                </div>
                                <div className="order-request">
                                    <p>Name</p>
                                    <div className="content-actions">
                                        <button onClick={handleAccept}>Accept</button>
                                        <button onClick={handleDecline} className="decline">Decline</button>
                                    </div>
                                </div>
                                <div className="order-request">
                                    <p>Name</p>
                                    <div className="content-actions">
                                        <p>7 minutes</p>
                                    </div>
                                </div>
                            </>
                        )}
                        {selectedOption === 'editMenu' && <p>Edit Menu</p>}
                        {selectedOption === 'manageInfo' && <p>Manage Information</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantManager;