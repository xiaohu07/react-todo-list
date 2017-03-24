import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import Item from './item';

export default class Items extends Component {
  render() {
    console.log(this.props.items);
    return (
      <Item setItem={this.props.setItem} item={this.props.items[0]} />
    );
  }
}

Items.propTypes = {
  setItem: PropTypes.func.isRequired,
  items: PropTypes.array
};
