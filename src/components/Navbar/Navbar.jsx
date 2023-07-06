import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/img/star-wars-2.png';
import './Navbar.css';

export const Navbar = ({ validate, setValidate }) => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="Logo Star Wars" />
                <div className="sign">
                    {validate === false ? (
                        <Link to="/login" className="btn-login">
                            LOG IN
                        </Link>
                    ) : (
                        <Link
                            to="/"
                            className="btn-logout"
                            onClick={() => {
                                setValidate(false);
                            }}
                        >
                            LOG OUT
                        </Link>
                    )}
                    <>//</>
                    <Link to="/signup" className="btn-signup">
                        SIGN UP
                    </Link>
                </div>
            </div>
            <div className="nav-link">
                <Link to="/" className="inactive-link">
                    HOME
                </Link>
                <NavLink
                    className={({ isActive }) => (isActive === true ? 'active' : 'inactive')}
                    to="/starships"
                    end
                >
                    STARSHIPS
                </NavLink>
            </div>
        </div>
    );
};