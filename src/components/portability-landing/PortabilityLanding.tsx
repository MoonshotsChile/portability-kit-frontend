import * as React from "react";
import {movingAwayIcon} from "../../assets";

const PortabilityLanding = () => {
    return (
        <section className="section">
            <div className="columns is-full">
                <div className="column is-half is-full-tablet is-full-mobile">
                    <h2 className="title mb-6">Comencemos con tu mudanza financiera</h2>
                    <div className="columns">
                        <div className="column">
                            <div className="level">

                            </div>
                            <p>En <strong>SBank</strong> te ofrecemos toda una variedad de planes
                                de
                                Cuenta Corriente que se ajustan a tus necesidades y a tus
                                elecciones. Tu eliges por qué pagar y qué beneficios disfrutar

                            </p>
                            <a className="button is-primary" href="#">Sign up</a>
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
    )
}
export default PortabilityLanding
