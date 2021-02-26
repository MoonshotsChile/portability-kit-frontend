import * as React from 'react';
import './Landing.scss';
import PortabilityRecipients from "../portability-recipients/PortabilityRecipients";
import PortabilityLanding from "../../components/portability-landing/PortabilityLanding";

const Landing = () => {
    return (
        <>
            <PortabilityLanding></PortabilityLanding>
            <PortabilityRecipients></PortabilityRecipients>
        </>
    );
}

export default Landing;
