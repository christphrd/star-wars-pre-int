import React from 'react';
import SelectCharName from './SelectCharName';

const data = require('../data/characters.json')

class SelectCharNameList extends React.Component {
    listCharacters = data.characters.map((char, index) => <SelectCharName key={index} name={char.name} url={char.url} selectChar={this.props.selectChar} />)

    render() {
        return(
            <div>
                {this.listCharacters}
                <p></p>
            </div>
        )
    }
}

export default SelectCharNameList;