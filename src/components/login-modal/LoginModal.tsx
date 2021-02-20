import * as React from 'react'
import './LoginModal.scss';
import {useState} from "react";

const LoginModal = () => {
    let [show, setShow] = useState(true)

    return (
        <div className={`modal ${show ? " is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Login</p>
                    <button className="delete" aria-label="close" onClick={() => setShow(false)}/>
                </header>
                <section className="modal-card-body">
                    <form>
                        <div className="field">
                            <div className="control">
                                <input className="input is-large" type="email" placeholder="RUT Usuario" autoFocus={true}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input className="input is-large" type="password" placeholder="Clave"/>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className="button is-success">Ingresar</button>
                </footer>
            </div>
        </div>
    )
}

export default LoginModal;
