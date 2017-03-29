import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import Item from './item';

export default class Items extends Component {
  renderItems() {
    return this.props.items.map((item, index) =>
      <div key={item.itemId} className={index} id={item.itemId}>
        <Item setItem={this.props.setItem} setNewItem={this.props.setNewItem}
              removeItem={this.props.removeItem} item={item} last={this.props.items[this.props.items.length - 1].itemId === item.itemId}
              maxItemId={this.props.items[this.props.items.length - 1].itemId} />
      </div>
    );
  }
  render() {
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
  removeItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired
};
