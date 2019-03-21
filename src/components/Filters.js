import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';

class Filters extends Component {

    render() {
        const { nameChanged, revenueChanged, maskedRevenue } = this.props;
        return (
            <div className="filters">
                    <label className="filters__label filters__label--small">Loja:</label>
                    <input className="filters__input" type="text" onChange={nameChanged} />
                    <label className="filters__label filters__label--small">Faturamento Mínimo:</label>
                    <CurrencyInput prefix="R$ " decimalSeparator="," thousandSeparator="." value={maskedRevenue} className="filters__input" type="text" onChangeEvent={revenueChanged} />
            </div>
        );
    }
}

export default Filters;