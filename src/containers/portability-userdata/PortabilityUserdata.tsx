import * as React from 'react';
import { Profile } from "../../models/Profile";

interface Props {
    profile?: Profile
}

const PortabilityUserdata = (props: Props) => {
    const profile = props.profile
    return (
        <table className="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>RUT</th>
                <th>Email</th>
                <th>Fecha de Nacimiento</th>
                <th>Región</th>
                <th>Ciudad</th>
                <th>Comuna</th>
                <th>Dirección</th>
                <th>Fono Fijo</th>
                <th>Fono Móvil</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                    <th>{profile?.nombres} {profile?.apellidoPaterno} {profile?.apellidoMaterno}</th>
                    <td>{profile?.rut}</td>
                    <td>{profile?.emailComercial} {profile?.emailParticular}</td>
                    <td>{profile?.fechaNacimiento}</td>
                    <td>{profile?.region}</td>
                    <td>{profile?.ciudad}</td>
                    <td>{profile?.comuna}</td>
                    <td>{profile?.direccion} {profile?.numeroDireccion}</td>
                    <td>{profile?.telefonoFijo}</td>
                    <td>{profile?.telefonoMovil}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default PortabilityUserdata

