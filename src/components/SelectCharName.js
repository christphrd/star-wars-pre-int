import React from 'react';

const SelectCharName = props => {
    console.log(props)
    return(
        <div>
          <button onClick={props.selectChar}>{props.name}</button>
        </div>

    )
}

export default SelectCharName