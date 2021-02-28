import * as React from 'react';
import { Recipient } from "../../models/Recipient";

interface Props {
    recipients?: Recipient[]
}

const PortabilityRecipients = (props: Props) => {
    return (
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>RUT</th>
                    <th>Email</th>
                    <th>Banco</th>
                    <th>Tipo Cuenta</th>
                    <th>Nº Cuenta</th>
                    <th>Fav.</th>
                </tr>
            </thead>
            <tbody>
            {props.recipients?.map((recipient, i) =>
                <tr key={`recipient-${i}`}>
                    <th>{recipient.nombreRazonSocial}</th>
                    <td>{recipient.rutBeneficiario}</td>
                    <td>{recipient.email}</td>
                    <td>{recipient.banco}</td>
                    <td>{recipient.nombreTipoCuenta}</td>
                    <td>{recipient.numeroCuenta}</td>
                    <td>{recipient.esFavorito ? 'Si' : 'No'}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default PortabilityRecipients
