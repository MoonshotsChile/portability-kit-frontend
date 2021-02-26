import * as React from "react";
import {useState} from "react";
import {movingAwayIcon} from "../../assets";
import LoginModal from "../login-modal/LoginModal";

const PortabilityLanding = () => {
    let [showLogin, setShowLogin] = useState(false)

    const handleShowLogin = () => {
        setShowLogin(!showLogin)
    }

    return (
        <>
            <section className="section portability-landing">
                <div className="columns is-full">
                    <div className="column is-half is-full-tablet is-full-mobile">
                        <div className="column is-full">
                            <h2 className="title mb-6">Comencemos con tu mudanza financiera</h2>
                            <p>En <strong>SBank</strong> te ofrecemos toda una variedad de planes
                                de
                                Cuenta Corriente que se ajustan a tus necesidades y a tus
                                elecciones. Tu eliges por qué pagar y qué beneficios disfrutar

                            </p>
                        </div>
                        <div className="column is-full is-centered">
                            <div className="buttons is-centered">
                                <button className="button is-fullwidth is-primary" onClick={()=>handleShowLogin()}>Portate Aquí</button>
                            </div>
                        </div>
                    </div>
                    <div className="column is-half is-full-tablet is-full-mobile">
                        <div className="level-item">
                            <figure className="image">
                                <img src={movingAwayIcon} alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <LoginModal show={showLogin}/>
        </>
    )
}
export default PortabilityLanding
