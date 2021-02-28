import * as React from 'react';
import { Product } from "../../models/Product";

interface Props {
    products?: Product[]
}

const PortabilityProducts = (props: Props) => {
    return (
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Moneda</th>
                <th>Num.</th>
                <th>Tipo Cliente</th>
                <th>Estado</th>
            </tr>
            </thead>
            <tbody>
            {props.products?.map(product =>
                <tr>
                    <th>{product.descripcionLogo}</th>
                    <td>{product.tipo}</td>
                    <td>{product.codigoMoneda}</td>
                    <td>{product.mascara}</td>
                    <td>{product.tipoCliente}</td>
                    <td>{product.estado}</td>
                </tr>)}
            </tbody>
        </table>
    )
}

export default PortabilityProducts
