import React, { Component } from 'react';

class Filters extends Component {
    
    render() { 
        const { nameChanged, revenueChanged } = this.props;
        return ( 
            <form>
            <input type="text" onChange={nameChanged} />
            <input type="text" onChange={revenueChanged} />
            </form>
        );
    }
}
 
export default Filters;