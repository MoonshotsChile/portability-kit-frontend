interface Movimiento {
    canal: string,
    descripcion: string,
    fecha: string,
    detalleGlosa: string[],
    montoMovimiento: number,
    tipo: string
}

export interface TransactionsEntity {
    lineaCredito: number,
    lineaSobregiro: number,
    saldoDisponible: number,
    saldoDisponibleLinea: number,
    movimientos: Movimiento[]
}
