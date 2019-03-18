import React from "react";
import PropTypes from "prop-types";
import "./Form.css";

class Input extends React.Component {
    render () {
        return (
            <div className="form-group">
                <input className="form-control" id="inputFormat"{...this.props}/>
            </div>
        )
    }
}

Input.props = {
    name: PropTypes.string,
    placeholder: PropTypes.string
}

export default Input