import React from 'react';
import SelectCharNameList from '../components/SelectCharNameList';

class CharacterSelectionContainer extends React.Component {
    render() {
        return(
            <div>
                <h1>Star Wars Characters</h1>
                <SelectCharNameList selectChar={this.props.selectChar}/>
            </div>
        )
    }
}

export default CharacterSelectionContainer;