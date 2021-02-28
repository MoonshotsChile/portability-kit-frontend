import * as React from 'react';
import './Landing.scss';
import PortabilityRecipients from "../portability-recipients/PortabilityRecipients";
import PortabilityLanding from "../../components/portability-landing/PortabilityLanding";
import { ContextApi } from "../../context-api/ContextApi";
import Accordion from "../../components/accordion/Accordion";
import PortabilityUserdata from "../portability-userdata/PortabilityUserdata";
import PortabilityProducts from "../portability-products/PortabilityProducts";
import PortabilityTransactions from "../portability-transactions/PortabilityTransactions";

const Landing = () => {
    const { profile, recipients, products, transactions } = React.useContext(ContextApi);
    const lastTransfer = transactions && transactions.length ? ` (desde ${transactions?.[transactions.length - 1].fecha} hasta ahora)`: ""

    return (
        <>
            <PortabilityLanding></PortabilityLanding>
            <Accordion id="mis-datos" title={'Mis Datos'} legend={profile?.nombres ? 'Revisa tus datos aquí' : 'Sin Datos'}>
                <PortabilityUserdata profile={profile}/>
            </Accordion>
            <Accordion id="mis-contactos"  title={'Mis Contactos'} legend={`${recipients?.length || 0} Contactos`}>
                <PortabilityRecipients recipients={recipients}/>
            </Accordion>
            <Accordion id="mis-productos" title={'Mis Productos'} legend={`${products?.length || 0} Productos`}>
                <PortabilityProducts products={products}/>
            </Accordion>
            <Accordion id="mis-transferencias" title={'Mis Transferencias'} legend={`${transactions?.length  || 0} Transferencias${lastTransfer}`}>
                <PortabilityTransactions transactions={transactions}/>
            </Accordion>
        </>
    );
}

export default Landing;
