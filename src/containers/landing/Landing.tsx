import * as React from 'react';
import './Landing.scss';
import PortabilityRecipients from "../portability-recipients/PortabilityRecipients";
import PortabilityStepper from "../../components/portability-stepper/PortabilityStepper";
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
