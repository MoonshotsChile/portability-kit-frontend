import * as React from 'react';
import './Accordion.scss';

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
            height: 0,
        };

        this.toggleCardState = this.toggleCardState.bind(this);
    }

    toggleCardState() {
        this.setState({
            "expanded": !this.state.expanded
        });
    }

    render() {
        const {title, legend, children} = this.props;
        const {expanded} = this.state;

        return(
            <div className="accordion column is-full">
                <div {...this.props}
                    className={ "card " + (expanded ? "expanded" : "not-expanded") }
                >
                    <header className="card-header" onClick={this.toggleCardState}>
                        <p className="card-header-title">
                            {title}
                        </p>
                        <a className="card-header-icon">
                            {legend}
                        </a>
                    </header>
                    <div className="card-content" ref={(content) => this.content = content }>
                        <div className="content">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;
