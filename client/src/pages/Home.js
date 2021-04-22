import React from 'react';
import data from '../data/data.json';

class Budgets extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount () {
    const { history } = this.props;
    history.push({
      pathname: '/properties',
      state: data
    });
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Budgets;
