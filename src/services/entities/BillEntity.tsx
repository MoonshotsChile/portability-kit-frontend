export interface BillEntity {
    empresa: Empresa,
    servicio: Servicio,
    identificador: string
}

interface Servicio {
    nombre: string
}

interface Empresa {
    nombreBiller: string,
    rut: string
}
