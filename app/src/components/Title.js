import React from "react";

class Title extends React.Component {
    render () {
        return (
            <h1>{this.props.translations.title}</h1>
        );
    }
}

export default Title;
