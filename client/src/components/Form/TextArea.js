import React from 'react';
import PropTypes from 'prop-types';
import "./Form.css";

class TextArea extends React.Component {
    render() {
        return (
            <div className="form-group">
                <textarea className="form-control" rows="25" {...this.props}/>
            </div>
        )
    }
}

TextArea.props = {
    name: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextArea