import * as React from 'react';
import './Navbar.scss';
import LoginModal from "../../components/login-modal/LoginModal";
import { useState } from "react";

const Navbar = () => {
    let [showLogin, setShowLogin] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="#">Moonshots</a>
                        <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                            <span aria-hidden="true"/>
                        </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">Asistente de Portabilidad</a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item navbar-item-dropdown" href="#">Datos Personales</a><a
                                    className="navbar-item navbar-item-dropdown" href="#">Movimientos</a></div>
                            </div>
                        </div>
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary" onClick={() => setShowLogin(true)}>Conectarme</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <LoginModal show={showLogin}></LoginModal>
        </>
    );
}

export default Navbar;
