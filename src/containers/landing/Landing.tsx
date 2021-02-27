import * as React from 'react';
import './Landing.scss';
import PortabilityRecipients from "../portability-recipients/PortabilityRecipients";
import PortabilityLanding from "../../components/portability-landing/PortabilityLanding";
import { ContextApi, ContextProps } from "../../context-api/ContextApi";

const Landing = () => {
    const { recipients } = React.useContext(ContextApi) as ContextProps;
    return (
        <>
            <PortabilityLanding></PortabilityLanding>
            {recipients?.map(()=> (
                <PortabilityRecipients recipients={recipients}></PortabilityRecipients>
            ))}

        </>
    );
}

export default Landing;
