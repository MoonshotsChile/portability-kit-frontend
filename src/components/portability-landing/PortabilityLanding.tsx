import * as React from "react";
import {movingAwayIcon} from "../../assets";
import LoginModal from "../login-modal/LoginModal";
import { ContextApi } from "../../context-api/ContextApi";

const PortabilityLanding = () => {
    const { saveContext, showLogin } = React.useContext(ContextApi);

    const showLoginModal = (showLogin: boolean) => {
        saveContext({showLogin})
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
                        <div className="column is-centered is-full">
                            <div className="buttons">
                                <button id="btn-show-login-modal" className="button is-fullwidth is-primary" onClick={()=>showLoginModal(true)}>Portate Aquí</button>
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
                <LoginModal show={showLogin}/>
            </section>
        </>
    )
}
export default PortabilityLanding
