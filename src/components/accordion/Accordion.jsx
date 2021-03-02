import React from 'react';
import PropTypes from 'prop-types'
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
        const {title, legend, children, expanded} = this.props;
        const expandedState = this.state.expanded || expanded;

        return(
            <div className="accordion column is-full">
                <div {...this.props}
                    className={ "card " + (expandedState ? "expanded" : "not-expanded") }
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

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    legend: PropTypes.string,
    expanded: PropTypes.bool
}

export default Accordion;
