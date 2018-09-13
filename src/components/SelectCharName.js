import React from 'react';

class SelectCharName extends React.Component {
    clicker = () => {
        this.props.selectChar(this.props.name, this.props.url)
    }

    render() {
        return(
            <div>
                <button onClick={this.clicker}>{this.props.name}</button>
            </div>

        )
    }
}

export default SelectCharName