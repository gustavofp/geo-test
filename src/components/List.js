import React, { Component } from 'react';
import Next from '../assets/images/right.svg';
import Previous from '../assets/images/left.svg';
import { formatCurrency } from '../shared/utils';

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            itemsPerPage: 15,
            data: [],
            maxPages: 0
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.data !== this.props.data) {
            const { page, itemsPerPage } = this.state

            this.paginationChanged(page, itemsPerPage, newProps.data);

            const value = newProps.data.length / itemsPerPage
            const maxPages = Math.floor(value) === value ? Math.round(value + 1) : Math.round(value);
            this.setState({ maxPages });
        }
    }

    handleNextPage = () => {
        const { itemsPerPage, page, maxPages } = this.state;
        const { data } = this.props;

        console.log(maxPages);
        if (page === maxPages) return;

        const currentPage = page + 1;

        this.setState({ page: currentPage }, this.paginationChanged(currentPage, itemsPerPage, data))
    }

    handlePreviousPage = () => {
        const { page, itemsPerPage } = this.state;
        const { data } = this.props;

        if (page === 0) return;

        const currentPage = page - 1;
        this.setState({ page: currentPage }, this.paginationChanged(currentPage, itemsPerPage, data))
    }

    paginationChanged = (page, itemsPerPage, data) => {
        console.log(`page: ${page}`);

        const paginatedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage)

        this.setState({ data: paginatedData })
    }

    renderCells = (data, minRevenue) => {
        return data.map(e => {
            const className = e.revenue > minRevenue ? 'black' : 'red'

            return <tr className={`table__data--${className}`}><td>{e.name}</td><td>{formatCurrency(e.revenue)}</td></tr>
        })
    }

    render() {

        const { minRevenue } = this.props;
        const { page, data } = this.state;
        return (
            <div>
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
                </table>
                <div className="table__footer">
                    <div className="table__footer--left">Página {page + 1}</div>
                    <div className="table__footer--right">
                        <img src={Previous} alt="Previous" onClick={this.handlePreviousPage} />
                        <img src={Next} alt="Next" onClick={this.handleNextPage} />
                    </div>
                </div>
            </div>
        );
    }
}

export default List;