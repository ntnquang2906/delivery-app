"use client"
import { useState, useEffect } from "react";
import { orders } from "@/assets/db";

export default function OrderTrackingPage() {
    const [ongoingOrders, setOngoingOrders] = useState([]);
    const [orderHistory, setOrderHistory] = useState([]);
    const [showOngoingOrders, setShowOngoingOrders] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate fetching data from orders file
                // const response = await fetch(orders);
                // const data = await response.json();
                
                // For demonstration, use data from orders file directly
                const data = orders;

                // Extracting date part without time for ongoing orders
                const ongoingOrdersWithDateOnly = data.ongoingOrders.map(order => ({
                    ...order,
                    date: order.date.split('T')[0] // Extracts date part without time
                }));

                // Extracting date part without time for order history
                const orderHistoryWithDateOnly = data.orderHistory.map(order => ({
                    ...order,
                    date: order.date.split('T')[0] // Extracts date part without time
                }));

                setOngoingOrders(ongoingOrdersWithDateOnly);
                setOrderHistory(orderHistoryWithDateOnly);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ maxWidth: "800px", margin: "auto", marginTop: "8px", padding: "16px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "16px", textAlign: "center" }}>Order Tracking</h2>
            <div>
                <input type="radio" id="ongoingOrders" name="orders" defaultChecked={showOngoingOrders} onClick={() => setShowOngoingOrders(true)} />
                <label htmlFor="ongoingOrders" style={{ marginRight: "16px" }}>Ongoing Orders</label>
                <input type="radio" id="orderHistory" name="orders" defaultChecked={!showOngoingOrders} onClick={() => setShowOngoingOrders(false)} />
                <label htmlFor="orderHistory">Order History</label>
            </div>
            <div>
                {showOngoingOrders && ongoingOrders.length > 0 && (
                    <div>
                        {ongoingOrders.map(order => (
                            <div key={order.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "12px", marginBottom: "12px" }}>
                                <div>
                                    <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Order ID: {order.id}</h3>
                                    <p style={{ marginBottom: "4px" }}>Date: {order.date}</p>
                                </div>
                                <p>Status: {order.status}</p>
                            </div>
                        ))}
                    </div>
                )}
                {!showOngoingOrders && orderHistory.length > 0 && (
                    <div>
                        {orderHistory.map(order => (
                            <div key={order.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #ccc", borderRadius: "4px", padding: "12px", marginBottom: "12px" }}>
                                <div>
                                    <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>Order ID: {order.id}</h3>
                                    <p style={{ marginBottom: "4px" }}>Date: {order.date}</p>
                                </div>
                                <button style={{ padding: "8px 12px", borderRadius: "4px", border: "none", backgroundColor: "#28a745", color: "#fff", fontWeight: "bold", cursor: "pointer" }}>View Receipt</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
