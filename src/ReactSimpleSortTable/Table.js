import React, { Component } from 'react';
import { THead, TBody } from './index';
import { orderBy } from 'lodash';

const SORTS = {
  up: 'asc',
  down: 'desc'
};

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  mapThs(ths) {
    return React.Children.map(ths, child => React.cloneElement(child, {
      ...child.props,
      sort: this.sort.bind(this),
      sortDirection: this.state.key === child.props.sortKey ? this.state.direction : child.props.sortDirection,
    }));
  }

  mapTr(tr) {
    return React.cloneElement(tr, {
      ...tr.props,
      children: this.mapThs(tr.props.children)
    });
  }

  sort(key, direction) {
    this.setState({ key, direction });
  }

  render() {
    require('font-awesome/css/font-awesome.css');
    const mappedChildren = React.Children.map(this.props.children, (child) => {
      switch (child.type) {
        case THead:
          return React.cloneElement(child, {
            ...child.props,
            children: this.mapTr(child.props.children)
          });
        case TBody:
          return React.cloneElement(child, {
            ...child.props,
            children: orderBy(child.props.children, item => item.props.data[this.state.key], [SORTS[this.state.direction]])
          });
        default:
          return null;
      }
    });

    return (
      <table className={this.props.className}>
        {mappedChildren}
      </table>
    );
  }
}

