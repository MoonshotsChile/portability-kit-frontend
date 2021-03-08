import * as React from 'react';
import {useState} from 'react';

interface Props {
    show?: boolean
}

const CookiesPolicies = (props: Props) => {
    const [show, setShow] = useState(props.show)
    return (
        <>
            <div className={`modal ${show ? " is-active" : ""}`}>
                <div className="modal-background"/>
                <div className="modal-card">
                    <section>
                        <div className="notification">
                            <button className="delete" onClick={() => setShow(false)}/>
                            <h3 className="title">Política de Cookies</h3>
                            <p className="subtitle">Utilizamos cookies para saber cómo interactúan los usuarios con el contenido y mejorar su experiencia cuando visitan nuestros sitios web. Por ejemplo, algunas cookies sirven para recordar el idioma o las preferencias del usuario, de modo que este no tiene que seleccionarlos cada vez que visita nuestros sitios web. También utilizamos cookies para realizar un seguimiento de la ubicación geográfica, de manera que podemos mostrar al usuario las ubicaciones de las oficinas y gasolineras Shell más próximas. Por otra parte, las cookies nos permiten presentar al usuario contenido específico, como los vídeos incluidos en nuestros sitios web. Podemos utilizar lo que aprendemos sobre el comportamiento de los usuarios en los sitios web para presentarles una publicidad personalizada en sitios web de terceros, con la idea de volver a ofrecerle nuestros productos y servicios.

                            </p>
                            <button className="button is-primary" onClick={() => setShow(false)}>Aceptar</button>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default CookiesPolicies
