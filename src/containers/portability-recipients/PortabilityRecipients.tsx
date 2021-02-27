import * as React from 'react';
import { Recipient } from "../../models/Recipient";

interface Props {
    recipients?: Recipient[]
}

const PortabilityRecipients = (props: Props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th><abbr title="Nombre">Nombre</abbr></th>
                    <th><abbr title="RUT">RUT</abbr></th>
                    <th><abbr title="Email">Email</abbr></th>
                    <th><abbr title="Banco">Banco</abbr></th>
                    <th><abbr title="Tipo Cuenta">Tipo de Cuenta</abbr></th>
                    <th><abbr title="Núm. Cuenta">Número de Cuenta</abbr></th>
                    <th><abbr title="Fav.">Favorito</abbr></th>
                </tr>
            </thead>
            <tbody>
            {props.recipients?.map(recipient =>
                <tr>
                    <th>{recipient.nombreRazonSocial}</th>
                    <td>{recipient.rutBeneficiario}</td>
                    <td>{recipient.email}</td>
                    <td>{recipient.banco}</td>
                    <td>{recipient.nombreTipoCuenta}</td>
                    <td>{recipient.numeroCuenta}</td>
                    <td>{recipient.esFavorito}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default PortabilityRecipients
