export interface Beneficiarios {
  beneficiario: Beneficiario[],
  pagina: any
}

interface Beneficiario {
    nombreRazonSocial: string,
    rutBeneficiario: string,
    listaCuentas: ListaCuenta[]
}

interface ListaCuenta {
    email: string,
    banco: string,
    nombreTipoCuenta: string,
    numeroCuenta: string,
    esFavorito: boolean,
}
