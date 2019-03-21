import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchStores } from '../actions/stores';

import Header from '../components/Header';
import List from '../components/List';
import Content from '../components/Content';
import MapContainer from '../components/MapContainer';
import Filters from '../components/Filters';
import Container from '../components/Container';
import FlexItem from '../components/FlexItem';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      revenue: 0,
      data: [],
      page: 0,
      itemsPerPage: 5,
      maskedRevenue: "0,00"
    }
  }

  componentWillMount() {
    this.props.fetchStores();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.stores.data !== this.props.stores.data) {
        this.setState({ data: newProps.stores.data });
    }
}

  nameChanged = e => {
    const { data } = this.props.stores;
    const name = e.target.value;
    this.setState({ name }, this.filterChanged(data, name))

  }

  revenueChanged = (e, maskedValue, floatValue) => {
    this.setState({ revenue: floatValue, maskedRevenue: maskedValue })
  }

  filterChanged = (data, name) => {
    let filteredData = []

    if (name) {
      filteredData = data.filter(e => e.name.toUpperCase().includes(name.toUpperCase()))
    }

    this.setState({ data: filteredData.length ? filteredData : data })
  };

  render() {
    const { revenue, data, maskedRevenue } = this.state;

    return (
      <div className="app">
        <Header />
        <Content>
          <Container>
            <FlexItem>
              <Filters nameChanged={this.nameChanged} maskedRevenue={maskedRevenue} revenueChanged={this.revenueChanged} />
            </FlexItem>
          </Container>
          <Container>
            <FlexItem>
              <List data={data} minRevenue={revenue} />
            </FlexItem>
            <FlexItem>
              <MapContainer data={data} minRevenue={revenue} />
            </FlexItem>
          </Container>
        </Content>
      </div>
    );
  }
}
const mapStateToProps = state => ({ stores: state.stores })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchStores }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
