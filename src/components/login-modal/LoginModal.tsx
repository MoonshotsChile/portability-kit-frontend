import * as React from 'react'
import { useEffect, useState } from 'react'
import './LoginModal.scss';
import { BancoChileService } from "../../services/BancoChileService";

interface Props {
    show: Boolean
}

const LoginModal = (props: Props) => {
    let [show, setShow] = useState(props.show)

    let [userdata, setUserdata] = useState({
        username: "",
        password: ""
    })

    let [isLoading, setDisabledSubmit] = useState(false);

    let [bankingData, setBankingData] = useState({
        userdata: {},
        cards: [],
        products: [],
        profile: {},
        recipients: {},
        transactions: {}
    })


    useEffect(() => {
        handleShow()
    }, [props.show])

    const handleShow = (_show?: boolean) => {
        console.log(_show, props);
        _show !== undefined ? setShow(_show) : setShow(props.show);
    }

    const handleChange = (e: { target: { id: string; value: string; } }) => {
        const {id, value} = e.target
        setUserdata(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const fetchBankingData = () => {
        const service = new BancoChileService(userdata)
        setDisabledSubmit(true)

        service.userdata()
            .then(
                response => response.json()
            ).then(userdata => {
            alert('Usuario: ' + JSON.stringify(userdata));
            setBankingData({...bankingData, userdata})

            return service.profile()
        }).then(
            response => response.json()
        ).then(profile => {
            alert('Perfil: ' + JSON.stringify(profile));
            setBankingData({...bankingData, profile})

            return service.recipients()
        }).then(
            response => response.json()
        ).then(recipients => {
            alert('Destinatarios: ' + JSON.stringify(recipients));
            setBankingData({...bankingData, recipients})

            return service.products()
        }).then(
            response => response.json()
        ).then(products => {
            alert('Productos: ' + JSON.stringify(products));
            setBankingData({...bankingData, products})

            return service.transactions()
        }).then(
            response => response.json()
        ).then(transactions => {
            alert('Transacciones: ' + JSON.stringify(transactions));
            setBankingData({...bankingData, transactions})

            return service.cards()
        }).then(
            response => response.json()
        ).then(cards => {
            alert('Tarjetas: ' + JSON.stringify(cards));
            setBankingData({...bankingData, cards})


        }).finally(() => {
            setDisabledSubmit(false)
            setShow(false)
        })
    }


    return (
        <div className={`modal ${show ? " is-active" : ""}`}>
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <h6 className="modal-card-title">Login</h6>
                    <button className="delete" aria-label="close" onClick={() => handleShow(false)}/>
                </header>
                <section className="modal-card-body">
                    <form>
                        <div className="field">
                            <div className="control">
                                <input className="input is-large" onChange={handleChange} type="text" id="username"
                                       value={userdata.username} placeholder="RUT Usuario" autoFocus={true}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input className="input is-large" onChange={handleChange} type="password" id="password"
                                       value={userdata.password} placeholder="Clave"/>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className={`button is-success is-fullwidth ${isLoading ? 'is-loading' : ''}`}
                            disabled={isLoading} onClick={fetchBankingData}>Ingresar
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default LoginModal;
