import React, { Component, PropTypes } from 'react';
import { forIn } from 'lodash';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import Item from './item';

export default class Items extends Component {
  renderItems() {
    const newItems = [];
    const maxItemId = Math.max(...Object.keys(this.props.items));
    forIn(this.props.items, (value, key) => {
      const newItem = (
        <div key={key}>
          <Item setItem={this.props.setItem} setNewItem={this.props.setNewItem} removeItem={this.props.removeItem} item={value} maxItemId={maxItemId} />
        </div>
      );
      newItems.push(newItem);
    });
    return newItems;
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
  items: PropTypes.object.isRequired
};
