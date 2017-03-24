import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import Item from './item';

export default class Items extends Component {
  renderItems() {
    return this.props.items.map(item =>
      <div key={item.itemId}>
        <Item setItem={this.props.setItem} setNewItem={this.props.setNewItem} item={item} last={this.props.items.length === item.itemId + 1} />
      </div>
    );
  }
  render() {
    console.log(this.props.items, 'items');
    const items = this.renderItems();
    return (
      <div>
        {items}
      </div>
    );
  }
}

Items.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};
