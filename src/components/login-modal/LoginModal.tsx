import * as React from 'react'
import { useState } from 'react'
import './LoginModal.scss';
import { ContextApi } from "../../context-api/ContextApi";
import { fetchBankingData } from "../../services/fetchBankingData";
import { format, validate } from "rut.js";

interface Props {
    show: Boolean
}

const LoginModal = (props: Props) => {
    const { saveContext, showLogin } = React.useContext(ContextApi);

    let [userdata, setUserdata] = useState({
        username: "",
        password: ""
    })

    let [isLoading, setDisabledSubmit] = useState(false);


    const handleShow = (showLogin: boolean) => {
       saveContext({showLogin})
    }

    const handleChange = (e: { target: { id: string; value: string; } }) => {
        const {id, value} = e.target
        setUserdata(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleChangeRut = (e: { target: { id: string; value: string; } }) => {
        if (e.target.value.length >= 6) e.target.value = format(e.target.value)
        return handleChange(e)
    }
    const fetchData = () => {
        setDisabledSubmit(true)
        fetchBankingData(userdata, saveContext)
            .then(() => window.location.href = '#mis-contactos')
            .catch(e => {
                console.error(e)
                alert(e.message)
            })
            .finally(() => {
            setDisabledSubmit(false)
            saveContext({showLogin: false})
        })
    }

    const isValidForm = () => {
        return validate(userdata.username) && userdata.password.length > 3
    }


    return (
        <div className={`modal ${showLogin ? " is-active" : ""}`}>
            <div className="modal-background"/>
            <div className="modal-card">
                <header className="modal-card-head">
                    <h6 className="modal-card-title">Conéctate Acá</h6>
                    <button className="delete" aria-label="close" onClick={() => handleShow(false)}/>
                </header>
                <section className="modal-card-body">
                    <form autoComplete="none">
                        <div className="field">
                            <div className="control">
                                <input className="input" onChange={handleChangeRut} type="text" id="username"
                                       value={userdata.username} placeholder="RUT Usuario" autoFocus={true} autoComplete="none"/>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input className="input" onChange={handleChange} type="password" id="password"
                                       value={userdata.password} placeholder="Clave" autoComplete="none"/>
                            </div>
                        </div>
                    </form>
                </section>
                <footer className="modal-card-foot">
                    <button className={`button is-fullwidth is-success ${isLoading ? 'is-loading' : ''}`}
                            disabled={isLoading || !isValidForm()} onClick={fetchData}>Conectar a Banco de Chile
                    </button>
                </footer>
            </div>
        </div>
    )
}

export default LoginModal;
