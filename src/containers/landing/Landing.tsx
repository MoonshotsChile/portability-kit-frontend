import * as React from 'react';
import './Landing.scss';
import PortabilityRecipients from "../portability-recipients/PortabilityRecipients";
import PortabilityLanding from "../../components/portability-landing/PortabilityLanding";
import { ContextApi } from "../../context-api/ContextApi";
import { useEffect } from "react";

const Landing = () => {
    const { recipients } = React.useContext(ContextApi);

    useEffect(() => {

    });

    return (
        <>
            <PortabilityLanding></PortabilityLanding>
            <PortabilityRecipients recipients={recipients}></PortabilityRecipients>
        </>
    );
}

export default Landing;
