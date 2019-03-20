import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { fetchStores } from '../actions/stores';

import Header from '../components/Header';
import List from '../components/List';
import Content from '../components/Content';
import MapContainer from '../components/MapContainer';
import Filters from '../components/Filters';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      revenue: null,
      data: [],
      page: 0,
      itemsPerPage: 5
    }
  }

  componentWillMount() {
    this.props.fetchStores();
  }


  getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    // if (prevProps.stores.data.length !== this.props.stores.data.length) {
    //   this.setState({ data: this.props.stores.data }, this.paginationChanged(this.state))
    // }
  }

  handleNextPage = () => {
    const { page } = this.state;

    const currentPage = page + 1;
    this.setState({ page: currentPage }, this.paginationChanged(this.state))
  }

  handlePreviousPage = () => {
    const { page } = this.state;

    if (page === 0) return;

    const currentPage = page - 1;
    this.setState({ page: currentPage }, this.paginationChanged(this.state))
  }

  nameChanged = e => {
    this.setState({ name: e.target.value })

    const { data, name } = this.state;
    this.filterChanged(data, name);
  }

  revenueChanged = e => {
    this.setState({ revenue: e.target.value })
  }

  filterChanged = (data, name) => {
    let filteredData = []

    if (name) {
      filteredData = data.filter(e => e.name.includes(name))
    }

    this.setState({ data: filteredData })
  };

  paginationChanged = state => {
    const { page, itemsPerPage, data } = state

    const paginatedData = data.slice(page * itemsPerPage, (page + 1) * itemsPerPage)
    this.setState({ data: paginatedData })
  } 

  render() {
    const { revenue, data, page } = this.state;

    return (
      <div className="app">
        <Header />
        <Content>
          <Filters nameChanged={this.nameChanged} revenueChanged={this.revenueChanged} />
          <List data={data} minRevenue={revenue} page={page} next={this.handleNextPage} previous={this.handlePreviousPage} />
          <MapContainer data={data} />
        </Content>
      </div>
    );
  }
}
const mapStateToProps = state => ({ stores: state.stores })
const mapDispatchToProps = dispatch => bindActionCreators({ fetchStores }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
