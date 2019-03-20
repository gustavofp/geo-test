import React, { Component } from 'react';

class List extends Component {

    renderCells = (data, minRevenue) => {
        return data.map(e => {
            const className = e.revenue > minRevenue ? 'black' : 'red'

            return <tr className={`table__data--${className}`}><td>{e.name}</td><td>{e.revenue}</td></tr>
        })
    }

    render() {

        const { data, minRevenue, page, next, previous } = this.props;
        return (
            <table className="table">
                <thead className="table__head">
                    <tr>
                        <th>Loja</th>
                        <th>Faturamento</th>
                    </tr>
                </thead>
                <tbody className="table__data">
                    {this.renderCells(data, minRevenue)}
                </tbody>
                <tfoot>
                    <tr>
                        <tf>Page {page + 1}</tf>
                        <tf><i onClick={previous}>Previous</i></tf>
                        <tf><i onClick={next}>Next</i></tf>
                    </tr>
                </tfoot>
            </table>
        );
    }
}

export default List;