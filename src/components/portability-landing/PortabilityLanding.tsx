import * as React from "react";
import {movingAwayIcon} from "../../assets";

const PortabilityLanding = () => {
    return (
        <section className="section">
            <div className="columns">
                <div className="column is-half">
                    <h2 className="title mb-6">Comencemos con tu mudanza financiera</h2>
                    <div className="columns">
                        <div className="column">
                            <div className="level">

                            </div>
                            <p className="block mb-6">En <strong>SBank</strong> te ofrecemos toda una varieda de planes
                                de
                                Cuenta Corriente que se ajustan a tus necesidades y a tus
                                elecciones. Tu eliges por qué pagar y qué beneficios disfrutar

                            </p>
                        </div>
                    </div>
                </div>
                <div className="column is-half">
                    <div className="level-item">
                        <figure className="image is-128x128">
                            <img src={movingAwayIcon} alt=""/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default PortabilityLanding
