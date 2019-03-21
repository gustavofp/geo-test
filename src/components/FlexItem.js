import React from 'react';

const FlexItem = props => {
    return ( 
        <div className="item">
            { props.children }
        </div>
     );
}
 
export default FlexItem;