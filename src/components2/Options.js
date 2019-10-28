import React from 'react';
import Option from './Options';

const Options = (props) => {
    console.log(props);
    return (
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.options.length === 0 && <p>Please add an option</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        handleDeleteOption={props.handleDeleteOption}
                    />
                    )
                )
            }
            
        </div> 
    )
}

export default Options;