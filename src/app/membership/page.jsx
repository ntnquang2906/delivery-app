"use client"
import React, { useState } from 'react';
import styles from '@/styles/Membership.module.css';
import Button from '@/components/Membership_button';
import { Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import Link from 'next/link'

const boldItalicText = {
    fontWeight: 'bold',
    fontStyle: 'italic'
};
const Register = () => {

    const [fullName, setFullName] = useState('');
    const [dob, setDob] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [state, setState] = useState('');
    const [phone, setPhone] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCvc] = useState('');
    const [termsAgreed, setTermsAgreed] = useState(false);

    const [warnings, setWarnings] = useState({
        fullName: false,
        dob: false,
        address: false,
        gender: false,
        state: false,
        phone: false,
        cardHolder: false,
        expiryDate: false,
        cardNumber: false,
        cvc: false,
        termsAgreed: false,
    });

    const validateForm = () => {
        const newWarnings = { ...warnings };
        let isValid = true;

        if (!fullName.trim()) {
            newWarnings.fullName = true;
            isValid = false;
        } else {
            newWarnings.fullName = false;
        }

        if (!dob) {
            newWarnings.dob = true;
            isValid = false;
        } else {
            newWarnings.dob = false;
        }

        if (!address.trim()) {
            newWarnings.address = true;
            isValid = false;
        } else {
            newWarnings.address = false;
        }

        if (!gender) {
            newWarnings.gender = true;
            isValid = false;
        } else {
            newWarnings.gender = false;
        }

        if (!state.trim()) {
            newWarnings.state = true;
            isValid = false;
        } else {
            newWarnings.state = false;
        }

        if (!phone.trim()) {
            newWarnings.phone = true;
            isValid = false;
        } else {
            newWarnings.phone = false;
        }

        if (!cardHolder.trim()) {
            newWarnings.cardHolder = true;
            isValid = false;
        } else {
            newWarnings.cardHolder = false;
        }

        if (!expiryDate) {
            newWarnings.expiryDate = true;
            isValid = false;
        } else {
            newWarnings.expiryDate = false;
        }

        if (!cardNumber.trim()) {
            newWarnings.cardNumber = true;
            isValid = false;
        } else {
            newWarnings.cardNumber = false;
        }

        if (!cvc.trim()) {
            newWarnings.cvc = true;
            isValid = false;
        } else {
            newWarnings.cvc = false;
        }

        if (!termsAgreed) {
            newWarnings.termsAgreed = true;
            isValid = false;
        } else {
            newWarnings.termsAgreed = false;
        }

        setWarnings(newWarnings);

        if (isValid) {
            // Submit form or proceed to the next step
            console.log('Form is valid. Proceeding...');
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };

    return (
        <form className={styles.formContainer}>
            <div className={styles.coloredBar}>
                <span>Member registration</span>
            </div>
            <div className={styles.formContainerWrapper}>
                <div className={styles.formGrid}>

                    <div className={styles.formGroup}>
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text"
                            id="fullname"
                            name="fullname"
                            className={`${styles.in} ${warnings.fullName ? 'error' : ''}`}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required />
                        {warnings.fullName && <span className={`${styles.errorMessage} error-message`}>* Please enter your full name.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date"
                            id="dob"
                            name="dob"
                            className={`${styles.in} ${warnings.dob ? 'error' : ''}`}
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            required />
                        {warnings.dob && <span className={`${styles.errorMessage} error-message`}>* Please enter your date of birth.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="address">Address:</label>
                        <input type="text"
                            id="address"
                            name="address"
                            className={`${styles.in} ${warnings.address ? 'error' : ''}`}
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required />
                        {warnings.address && <span className={`${styles.errorMessage} error-message`}>* Please enter your address.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender"
                            name="gender"
                            className={`${styles.in} ${warnings.gender ? 'error' : ''}`}
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {warnings.gender && <span className={`${styles.errorMessage} error-message`}>* Please select your gender.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="state">State:</label>
                        <input type="text"
                            id="state"
                            name="state"
                            className={`${styles.in} ${warnings.state ? 'error' : ''}`}
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            required />
                        {warnings.state && <span className={`${styles.errorMessage} error-message`}>* Please enter your state.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel"
                            id="phone"
                            name="phone"
                            pattern="[0-9]{10}"
                            className={`${styles.in} ${warnings.phone ? 'error' : ''}`}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required />
                        {warnings.phone && <span className={`${styles.errorMessage} error-message`}>* Please enter a valid phone number.</span>}
                    </div>
                </div>
            </div>
            <div className={styles.checkoutLabelWrapper}>
                <div className={styles.checkoutLine}></div>
                <label className={`${styles.checkoutLabel}  ${styles.boldText} `}>CHECK OUT</label>
                <Box bg='#689767' w='20%' h='27px' borderRadius='20px' fontStyle='italic' p={4} color='black' styles={boldItalicText} style={{ marginLeft: '50px' }}>
                    12978 people already enrolled
                </Box>
            </div>
            <div className={styles.formGridWrapper}>
                <div className={styles.formGrid}>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Card holder:</label>
                        <input
                            type="text"
                            id="cardHolder"
                            name="cardHolder"
                            className={`${styles.in} ${warnings.cardHolder ? 'error' : ''}`}
                            value={cardHolder}
                            onChange={(e) => setCardHolder(e.target.value)}
                            required
                        />
                        {warnings.cardHolder && <span className={`${styles.errorMessage} error-message`}>* Please enter the card holder's name.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Expiration date:</label>
                        <input
                            type="month"
                            id="expiryDate"
                            name="expiryDate"
                            className={`${styles.in} ${warnings.expiryDate ? 'error' : ''}`}
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            required
                        />
                        {warnings.expiryDate && <span className={`${styles.errorMessage} error-message`}>* Please enter the expiration date.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">Card number</label>
                        <input
                            type="tel"
                            id="cardNumber"
                            name="cardNumber"
                            className={`${styles.in} ${warnings.cardNumber ? 'error' : ''}`}
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            required
                        />
                        {warnings.cardNumber && <span className={`${styles.errorMessage} error-message`}>*Please enter a valid card number.</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="phone">CVC</label>
                        <div className={`${styles.formGroup} ${styles.cvcFormGroup}`}>
                            <input
                                type="tel"
                                id="cvc"
                                name="cvc"
                                pattern="[0-9]{4}"
                                className={`${styles.in} ${warnings.cvc ? 'error' : ''}`}
                                value={cvc}
                                onChange={(e) => setCvc(e.target.value)}
                                required
                            />
                            {warnings.cvc && <span className={`${styles.errorMessage} error-message`}>Please enter a valid CVC.</span>}
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <hr></hr>
            <div className={styles.checkboxWrapper}>

                <Checkbox
                    colorScheme="green">
                    Details
                </Checkbox>
            </div>
            <div className={styles.checkboxWrapper1}>
                <Checkbox colorScheme="green" >
                    Agree with terms and conditions
                </Checkbox>

            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonWrapper}>
                    <Link href='/personal-information'>
                        <Button type="button" isLoading={false} border="2px" borderColor="green.500" onClick={validateForm}>
                            Proceed
                        </Button>
                    </Link>
                </div>
            </div>

        </form>


    );
};

export default Register;