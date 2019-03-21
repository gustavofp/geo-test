import React, { Component } from 'react';
import CurrencyInput from 'react-currency-input';
import Container from '../components/Container';
import FlexItem from './FlexItem';

class Filters extends Component {

    render() {
        const { nameChanged, revenueChanged, maskedRevenue } = this.props;
        return (
            <section className="filters">
                <Container>
                    <FlexItem>
                        <label className="filters__label filters__label--small">Loja:</label>
                        <input className="filters__input" type="text" onChange={nameChanged} />
                    </FlexItem>
                    <FlexItem>
                        <label className="filters__label filters__label--small">Faturamento Mínimo:</label>
                        <CurrencyInput prefix="R$ " decimalSeparator="," thousandSeparator="." value={maskedRevenue} className="filters__input" type="text" onChangeEvent={revenueChanged} />
                    </FlexItem>
                </Container>
            </section>
        );
    }
}

export default Filters;