import React from 'react';

const Container = props => {
    return ( 
        <section className="container container__flex">
            { props.children }
        </section>
    );
}
 
export default Container;