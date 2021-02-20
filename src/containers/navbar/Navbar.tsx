import * as React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar-brand"><a className="navbar-item" href="#">Moonshots</a>
                    <a
                    className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                        <span aria-hidden="true"/>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item" href="#">Features</a><a className="navbar-item"
                                                                           href="#">Enterprise</a><a
                        className="navbar-item" href="#">Support</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">ICO</a>
                            <div className="navbar-dropdown"><a className="navbar-item navbar-item-dropdown"
                                                                href="#">Whitepaper</a><a
                                className="navbar-item navbar-item-dropdown" href="#">Token</a></div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons"><a className="button is-light" href="#">Log in</a><a
                                className="button is-primary" href="#">Sign up</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
