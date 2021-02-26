import * as React from 'react';
import {useState} from 'react';

interface Props {
    show?: boolean
}

const CookiesPolicies = (props: Props) => {
    let [show, setShow] = useState(props.show)
    return (
        <>
            <div className={`modal ${show ? " is-active" : ""}`}>
                <div className="modal-background"/>
                <div className="modal-card">
                    <section>
                        <div className="notification">
                            <button className="delete" onClick={() => setShow(false)}/>
                            <h3 className="title">Cookie Policy</h3>
                            <p className="subtitle">We use cookies to personalise content, to provide social media
                                features and
                                to analyse our traffic. We also share information about your use of our site with our
                                social
                                media, advertising and analytics partners. If you want to change your cookie setting,
                                please see
                                the ‘how to reject cookies' section of our <a href="#">Cookie Policy</a>. Otherwise, if
                                you
                                agree to our use of cookies, please continue to use our website.</p>
                            <button className="button is-primary" onClick={() => setShow(false)}>I accept cookies</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CookiesPolicies
