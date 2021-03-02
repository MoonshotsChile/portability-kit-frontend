import * as React from 'react';
import './Landing.scss';
import PortabilityRecipients from "../portability-recipients/PortabilityRecipients";
import PortabilityLanding from "../../components/portability-landing/PortabilityLanding";
import { ContextApi } from "../../context-api/ContextApi";
import Accordion from "../../components/accordion/Accordion";
import PortabilityUserdata from "../portability-userdata/PortabilityUserdata";
import PortabilityProducts from "../portability-products/PortabilityProducts";
import PortabilityTransactions from "../portability-transactions/PortabilityTransactions";
import PortabilityBills from "../portability-bills/PortabilityBills";

const Landing = () => {
    const { profile, recipients, products, transactions, bills, accordions } = React.useContext(ContextApi);
    const lastTransfer = transactions && transactions.length ? ` (desde ${transactions?.[transactions.length - 1].fecha} hasta ahora)`: ""

    return (
        <>
            <PortabilityLanding></PortabilityLanding>
            {profile?.rut && (
                <div className="section tus-datos-legend">
                    <h2>Tus datos</h2>
                    <p>Estos son los datos que hemos rescatado, puedes portalos cuando tu quieras a nuestro banco. Estos datos estan protegidos y no seran compartidos con ninguna otra entidad financiera</p>
                </div>
            )}
            <div className="accordions">
                <Accordion id="mis-datos" title={'Mis Datos'} legend={profile?.nombres ? 'Revisa tus datos aquí' : 'Sin Datos'} expanded={accordions.personalData}>
                    <PortabilityUserdata profile={profile}/>
                </Accordion>
                <Accordion id="mis-contactos"  title={'Mis Contactos'} legend={`${recipients?.length || 0} Contactos`} expanded={accordions.contacts}>
                    <PortabilityRecipients recipients={recipients}/>
                </Accordion>
                <Accordion id="mis-productos" title={'Mis Productos'} legend={`${products?.length || 0} Productos`} expanded={accordions.products}>
                    <PortabilityProducts products={products}/>
                </Accordion>
                <Accordion id="mis-transferencias" title={'Mis Transferencias'} legend={`${transactions?.length  || 0} Transferencias${lastTransfer}`} expanded={accordions.transactions}>
                    <PortabilityTransactions transactions={transactions}/>
                </Accordion>
                <Accordion id="mis-cuentas" title={'Mis Cuentas'} legend={`${bills?.length  || 0} Cuentas`} expanded={accordions.bills}>
                    <PortabilityBills bills={bills}/>
                </Accordion>
            </div>
        </>
    );
}

export default Landing;
