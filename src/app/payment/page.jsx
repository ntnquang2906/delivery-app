"use client"
import { useState } from "react";

export default function PaymentPage() {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');

    const handlePayment = () => {
        // Handle payment logic here
        console.log('Payment processing...');
    };

    return (
        <div style={{ maxWidth: "800px", margin: "auto", marginTop: "8px", padding: "16px", border: "1px solid #ccc", borderRadius: "6px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", textAlign: "center" }}>Payment Details</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
                <div>
                    {/* Payment Form */}
                    <div style={{ marginBottom: "16px" }}>
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "16px" }}>
                        <label htmlFor="expiry">Expiry (MM/YY)</label>
                        <input type="text" id="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "16px" }}>
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                    </div>
                    <div style={{ marginBottom: "16px" }}>
                        <label htmlFor="name">Name on Card</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }} />
                    </div>
                    <button style={{ width: "100%", padding: "12px", borderRadius: "4px", border: "none", backgroundColor: "#28a745", color: "#fff", fontWeight: "bold", cursor: "pointer" }} onClick={handlePayment}>Pay Now</button>
                    <p style={{ textAlign: "center", fontSize: "14px", color: "#777" }}>Secure payment gateway</p>
                </div>
                <div>
                    {/* Order Summary */}
                    <div style={{ border: "1px solid #ccc", borderRadius: "6px", padding: "16px" }}>
                        <h3 style={{ fontSize: "18px", marginBottom: "16px" }}>Order Summary</h3>
                        {/* Add your order summary details here */}
                        <p>Item 1 - $10</p>
                        <p>Item 2 - $15</p>
                        <p>Item 3 - $20</p>
                        <p style={{ marginTop: "8px", fontWeight: "bold" }}>Total: $45</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
