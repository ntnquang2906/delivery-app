"use client"
import React, { useState } from 'react';

export default function ShoppingCart() {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const products = [
        {
            id: 1,
            name: 'Nachos',
            price: 19,
            description: 'Delicious nachos with cheese, guacamole, and salsa',
            image: 'https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-superJumbo.jpg'
        },
        {
            id: 2,
            name: 'Burrito',
            price: 18,
            description: 'Spicy burrito with beans, rice, and choice of meat',
            image: 'https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-superJumbo.jpg'
        },
        {
            id: 3,
            name: 'Coke',
            price: 5,
            description: 'Refreshing Coca-Cola drink',
            image: 'https://static01.nyt.com/images/2024/01/10/multimedia/AS-Burrito-vzhk/AS-Burrito-vzhk-superJumbo.jpg'
        }
    ];

    const addToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        calculateTotal();
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter((item) => item.id !== product.id);
        setCart(updatedCart);
        calculateTotal();
    };

    const calculateTotal = () => {
        let totalAmount = 0;
        cart.forEach((item) => {
            totalAmount += item.price * item.quantity;
        });
        setTotal(totalAmount);
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2>Shopping Cart</h2>
                <input type="text" placeholder="Search..." />
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    {products.map((product) => (
                        <div key={product.id} style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', marginBottom: '20px' }}>
                            <img src={product.image} alt={product.name} style={{ width: '100%' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '18px' }}>{product.name}</h3>
                                <p style={{ fontSize: '14px', color: '#718096' }}>{product.description}</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                                    <div style={{ fontSize: '16px', fontWeight: 'bold' }}>${product.price.toFixed(2)}</div>
                                    <button style={{ backgroundColor: 'blue', color: 'white', padding: '8px', borderRadius: '5px' }} onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden', padding: '20px' }}>
                        <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Cart</h3>
                        {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            <>
                                {cart.map((item) => (
                                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                        <span>{item.name}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                        <input type="number" value={item.quantity} min="1" onChange={(e) => setCart(cart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: parseInt(e.target.value, 10) } : cartItem))} />
                                        <button style={{ backgroundColor: 'red', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={() => removeFromCart(item)}>Remove</button>
                                    </div>
                                ))}
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                                    <span style={{ fontWeight: 'bold' }}>Total:</span>
                                    <span style={{ fontWeight: 'bold' }}>${total.toFixed(2)}</span>
                                </div>
                                <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px', borderRadius: '5px', marginTop: '20px' }}>Checkout</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
