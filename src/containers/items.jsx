import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import Item from './item';

export default class Items extends Component {
  renderItems() {
    return this.props.items.map(item =>
      <div key={item.itemId}>
        <Item setItem={this.props.setItem} item={item} />
      </div>
    );
  }
  render() {
    console.log(this.props.items);
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
  items: PropTypes.array.isRequired
};
