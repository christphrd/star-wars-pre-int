import React from 'react';

import Button from '@material-ui/core/Button';

class SelectCharName extends React.Component {
    clicker = () => {
        this.props.selectChar(this.props.name, this.props.url)
    }

    render() {
        return(
            <React.Fragment>
                <Button variant="contained" size="large" onClick={this.clicker}>{this.props.name}</Button>
            </React.Fragment>
        )
    }
}

export default SelectCharName