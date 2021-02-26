import * as React from 'react';

const PortabilityStepper = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns is-multiline">
                    <div className="column is-6-tablet is-3-desktop">
                        <div className="box">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.dev/placeholder/icons/folder-o.svg" alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content has-text-right">
                                    <h3 className="title is-1 has-text-info">2</h3>
                                </div>
                            </div>
                            <h4 className="title">Projects</h4>
                            <progress className="progress is-info" role="progressbar" value="75" max="100"></progress>
                        </div>
                    </div>
                    <div className="column is-6-tablet is-3-desktop">
                        <div className="box">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.dev/placeholder/icons/users.svg" alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content has-text-right">
                                    <h3 className="title is-1 has-text-danger">117</h3>
                                </div>
                            </div>
                            <h4 className="title">Clients</h4>
                            <progress className="progress is-danger" role="progressbar" value="75" max="100"></progress>
                        </div>
                    </div>
                    <div className="column is-6-tablet is-3-desktop">
                        <div className="box">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.dev/placeholder/icons/file-text-o.svg" alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content has-text-right">
                                    <h3 className="title is-1 has-text-success">248</h3>
                                </div>
                            </div>
                            <h4 className="title">Invoices</h4>
                            <progress className="progress is-success" role="progressbar" value="75"
                                      max="100"></progress>
                        </div>
                    </div>
                    <div className="column is-6-tablet is-3-desktop">
                        <div className="box">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src="https://bulma.dev/placeholder/icons/calendar-o.svg"
                                                                            alt=""/>
                                    </figure>
                                </div>
                                <div className="media-content has-text-right">
                                    <h3 className="title is-1 has-text-info">14</h3>
                                </div>
                            </div>
                            <h4 className="title">Appointments</h4>
                            <progress className="progress is-info" role="progressbar" value="75" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PortabilityStepper
