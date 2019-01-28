import React from 'react';
import PropTypes from 'prop-types';

class TextArea extends React.Component {
    render() {
        return (
            <div className="form-group">
                <textarea className="form-control" rows="20" {...this.props}/>
            </div>
        )
    }
}

TextArea.props = {
    name: PropTypes.string,
    placeholder: PropTypes.string
}

export default TextArea