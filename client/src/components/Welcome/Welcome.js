import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';

class Welcome extends React.Component {
    render() {
        return (
            <div className="introduction">
                    Welcome to the surf diary.  My purpose for the surf diary is to give surfers and enthusiasts alike a resource to document spots they believe are significant and worth sharing.  We all know the mark a surf spot can leave on a surfer after a great session.  My hope is that this tool provides you a way to capture a piece of that and take with you moving forward.
                    <br/>
                    <br/>
                    We trust that you will use this tool responsibly and true to the great surfing heritage that we all share in.  If you would like to learn more about this please visit the <a href="https://eos.surf/">Encyclopedia Of Surfing.</a>.
                    <br/>
                    <br/>
                    A very special shout out to Matt Warshaw for all his efforts over the years in chronicaling the rich history of surfing.
                    <br/>
                    Sincerely,<br/>
                        Andrew Flak
            </div>
        );
    }

}

Welcome.props = {
    children: PropTypes.node
}

export default Welcome;