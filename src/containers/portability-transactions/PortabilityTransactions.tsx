import * as React from 'react';
import { Transaction } from "../../models/Transaction";

interface Props {
    transactions?: Transaction[]
}

const PortabilityTransactions = (props: Props) => {
    return (
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th>Fecha</th>
                <th>Canal</th>
                <th className="is-1">Descripción</th>
                <th className="is-1">Tipo</th>
                <th className="is-1">Monto</th>
                <th className="is-1" style={{maxWidth: '100px'}}>Detalle</th>
            </tr>
            </thead>
            <tbody>
            {props.transactions?.map(transaction =>
                <tr>
                    <td className="is-1">{transaction.fecha}</td>
                    <td className="is-1">{transaction.canal}</td>
                    <td className="is-1">{transaction.descripcion}</td>
                    <td className="is-1">{transaction.tipo}</td>
                    <td className="is-1">{transaction.montoMovimiento}</td>
                    <td className="is-1">{transaction.detalleGlosa}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default PortabilityTransactions

