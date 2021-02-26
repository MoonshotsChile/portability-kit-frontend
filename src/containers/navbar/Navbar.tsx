import * as React from 'react';
import './Navbar.scss';
import { sBankIcon } from "../../assets";

const Navbar = () => {

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">
                            <img src={sBankIcon} alt=""/>
                        </a>
                        <a className="navbar-item" href="#">
                            <h1 className="sbank">Sbank</h1>
                        </a>
                        <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="navbar-divider"></div>
        </>
    );
}

export default Navbar;
