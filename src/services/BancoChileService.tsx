import { Userdata } from "../models/Userdata";

export class BancoChileService {
    API_URL = 'https://api.moonshots.cl/portability-kit/banco-chile';
    private user: Userdata;

    constructor(userdata: Userdata) {
        this.user = userdata;
    }

    userdata(): Promise<Response> {
        return this.fetchApi('userdata')
    }

    recipients(): Promise<Response> {
        return this.fetchApi('recipients')
    }

    transactions(): Promise<Response> {
        return this.fetchApi('transactions')
    }

    products(): Promise<Response> {
        return this.fetchApi('products')
    }

    cards(): Promise<Response> {
        return this.fetchApi('cards')
    }

    profile(): Promise<Response> {
        return this.fetchApi('profile')
    }

    bills(): Promise<Response> {
        return this.fetchApi('bills')
    }

    private fetchApi(apiPath: string) {
        return fetch(`${this.API_URL}/${apiPath}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.user)
        })
    }
}
