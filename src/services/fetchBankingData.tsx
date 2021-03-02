import React from 'react';
import { BeneficiariosEntity } from "./entities/BeneficiariosEntity";
import { BancoChileService } from "./BancoChileService";
import { Userdata } from "../models/Userdata";
import { Recipient } from "../models/Recipient";
import { ProfileEntity } from "./entities/ProfileEntity";
import { Profile } from "../models/Profile";
import { ProductosEntity } from "./entities/ProductosEntity";
import { TransactionsEntity } from "./entities/TransactionsEntity";
import { Transaction } from "../models/Transaction";
import { Product } from "../models/Product";
import { formatTranferDateTime } from "./formatters";
import { BillEntity } from "./entities/BillEntity";
import { Bill } from "../models/Bill";
import { format } from "rut.js";

export const fetchBankingData = (userdata: Userdata, saveContext: Function) => {
    const service = new BancoChileService(userdata)

    return service.profile()
        .then(
            response => {
                if (response.status === 401) {
                    throw(Error("login incorrecto"))
                } else return response.json()
            }
        ).then((response: ProfileEntity) => {
        const profile: Profile = {
            nombres: response.datosCliente?.nombres,
            apellidoPaterno: response.datosCliente?.apellidoPaterno,
            apellidoMaterno: response.datosCliente?.apellidoMaterno,
            rut: response.datosCliente?.rut,
            fechaNacimiento: response.datosCliente?.fechaNacimiento ? new Date(response.datosCliente?.fechaNacimiento + 3600 * 3).toLocaleDateString('es-CL') : '',
            region: response.datosContacto?.region,
            ciudad: response.datosContacto?.ciudad,
            comuna: response.datosContacto?.comuna,
            direccion: response.datosContacto?.direccion,
            numeroDireccion: response.datosContacto?.numeroDireccion,
            emailComercial: response.datosContacto?.emailComercial,
            emailParticular: response.datosContacto?.emailParticular,
            telefonoFijo: response.datosContacto?.telefonoFijo,
            telefonoMovil: response.datosContacto?.telefonoMovil,
        }
        saveContext( { accordions: {personalData: true} })
        saveContext( { profile })
        return service.recipients()
    }).then(
        response => response.json()
    ).then((response: BeneficiariosEntity) => {
        const recipients: Recipient[] = response.beneficiario.map(
            beneficiario => {
                return { ...beneficiario, ...beneficiario.listaCuentas[0] }
            }
        )
        saveContext({ recipients })

        return service.products()
    }).then(
        response => response.json()
    ).then((response: ProductosEntity )=> {
        const products: Product[] = response.productos
        saveContext({ products })

        return service.transactions()
    }).then(
        response => response.json()
    ).then((response: TransactionsEntity) => {
        const transactions: Transaction[] = response.movimientos.map(movimiento => {
            return {
                canal: movimiento.canal,
                descripcion: movimiento.descripcion,
                detalleGlosa: movimiento.detalleGlosa.join(", "),
                fecha: formatTranferDateTime(movimiento.fecha),
                tipo: movimiento.tipo,
                montoMovimiento: movimiento.montoMovimiento.toString()
            }
        })
        saveContext({ transactions })
        return service.bills()
    }).then(
        response => response.json()
    ).then((response: BillEntity[]) => {
        const bills: Bill[] = response.map(bill => {
            return {
                nombre: bill.servicio.nombre,
                nombreBiller: bill.empresa.nombreBiller,
                rut: format(bill.empresa.rut),
                identificador: bill.identificador
            }
        })
        saveContext({ bills })
    })
}
