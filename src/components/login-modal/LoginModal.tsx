import * as React from 'react'
import { useEffect, useState } from 'react'
import './LoginModal.scss';
import { BancoChileService } from "../../services/BancoChileService";
import { ContextApi, ContextProps } from "../../context-api/ContextApi";
import { Beneficiarios } from "../../services/entities/Beneficiarios";

interface Props {
    show: Boolean
}

const LoginModal = (props: Props) => {
    let [show, setShow] = useState(props.show)

    const { saveContext } = React.useContext(ContextApi);

    let [userdata, setUserdata] = useState({
        username: "",
        password: ""
    })

    let [isLoading, setDisabledSubmit] = useState(false);


    useEffect(() => {
        handleShow()
    }, [props.show])

    const handleShow = (_show?: boolean) => {
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

        service.profile()
        .then(
            response => response.json()
        ).then(response => {
            const profile = response
            saveContext( { profile })
            return service.recipients()
        }).then(
            response => response.json()
        ).then((response: Beneficiarios) => {
            const recipients = response.beneficiario.map(
                beneficiario => {
                    return { ...beneficiario, ...beneficiario.listaCuentas[0] }
                }
            )
            saveContext({ recipients })

            return service.products()
        }).then(
            response => response.json()
        ).then(response => {
            const products = response
            saveContext({ products })

            return service.transactions()
        }).then(
            response => response.json()
        ).then(response => {
            const transactions = response
            saveContext({ transactions })

            return service.cards()
        }).then(
            response => response.json()
        ).finally(() => {
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
                                <input className="input" onChange={handleChange} type="text" id="username"
                                       value={userdata.username} placeholder="RUT Usuario" autoFocus={true}/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input className="input" onChange={handleChange} type="password" id="password"
                                       value={userdata.password} placeholder="Clave"/>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className={`button is-fullwidth is-success ${isLoading ? 'is-loading' : ''}`}
                            disabled={isLoading} onClick={fetchBankingData}>Ingresar
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default LoginModal;
