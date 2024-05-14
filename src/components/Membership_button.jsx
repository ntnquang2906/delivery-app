import React from 'react';
import styles from '@/styles/Membership.module.css';

const Button = ({ children, type, onClick, isLoading, ...props }) => {
    return (
        <button
            type={type}
            className={styles.button}
            onClick={onClick}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? "Loading..." : children}
        </button>
    );
};

export default Button;