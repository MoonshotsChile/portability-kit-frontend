export interface ProductosEntity {
    productos: Producto[]
}

interface Producto {
    descripcionLogo: string,
    tipo: string,
    mascara: string,
    tipoCliente: string,
    estado: string,
    codigoMoneda: string
}
