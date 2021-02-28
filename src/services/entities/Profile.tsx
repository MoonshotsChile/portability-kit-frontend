export interface Profile {
    datosCliente?: DatosCliente,
    datosContacto?: DatosContacto,
    datosEjecutivo?: DatosEjecutivo
}

interface DatosCliente {
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    fechaNacimiento: number,
    clasificacionRiesgo: string,
    genero: number
}

interface DatosContacto {
    region: string,
    ciudad: string,
    comuna: string,
    direccion: string,
    emailComercial: string,
    emailParticular: string,
    telefonoComercial: string,
    telefonoFijo: string,
    telefonoMovil: string,
    tipoDespacho: string
}

interface DatosEjecutivo {
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    email: string,
    oficina: string,
    telefono: string
}
