import React from 'react';
import PropTypes from 'prop-types';

class FormBtn extends React.Component {

    render() {
        // Destructing the type, className, children and onClick props, applying them to the button element
        const { children, disabled, onClick } = this.props 
        // const { disabled, onClick } = this.PropTypes

        return (
            <button onClick={onClick} disabled={disabled} style={{float: "right", marginBottom: 10 }}
            className="btn btn-success">
            {children}
            </button>
        );
    }
}

FormBtn.props = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default FormBtn