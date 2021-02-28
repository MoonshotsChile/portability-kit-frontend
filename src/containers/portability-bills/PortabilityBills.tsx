import * as React from 'react';
import { Bill } from "../../models/Bill";

interface Props {
    bills?: Bill[]
}

const PortabilityBills = (props: Props) => {
    return (
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th>Categoría</th>
                <th>Empresa</th>
                <th>RUT</th>
                <th>Identificador Cuenta</th>
            </tr>
            </thead>
            <tbody>
            {props.bills?.map((bill, i) =>
                <tr key={`bill-${i}`}>
                    <th>{bill.nombre}</th>
                    <td>{bill.nombreBiller}</td>
                    <td>{bill.rut}</td>
                    <td>{bill.identificador}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default PortabilityBills
