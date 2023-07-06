import React, { useEffect, useState } from 'react';
import './SignUp.css';

export const SignUp = ({ userList, setUserList }) => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [successfull, setSuccessfull] = useState('');

    const handleChangeInput = (event) => {
        const {
            target: { value, name }
        } = event;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const exists = userList.find((user) => user.email === form.email);
        if (exists) {
            setError('¡This user already exists!');
            setTimeout(() => {
                setError('');
            }, 5000);
            return;
        } else {
            setSuccessfull('Registration has been successful.');
            setUserList([...userList, form]);
            setTimeout(() => {
                setSuccessfull('');
            }, 5000);
        }
        event.target.reset();
    };

    useEffect(() => {
        localStorage.setItem('Users', JSON.stringify(userList));
    }, [userList]);

    return (
        <div className="signup-container">
            <form className="signup-card" onSubmit={handleSubmit}>
                <input
                    className="signup-input"
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChangeInput}
                    required
                />
                <input
                    className="signup-input"
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChangeInput}
                    required
                />
                <input
                    className="signup-input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChangeInput}
                    required
                />
                {error === '' ? '' : <p className="error-signup">{error}</p>}
                <input
                    className="signup-input"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChangeInput}
                    required
                />
                <button className="btn-signup-form" type="submit">
                    Create Account
                </button>
                {successfull === '' ? '' : <p className="successful-signup">{successfull}</p>}
            </form>
        </div>
    );
};