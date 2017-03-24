import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.onNewValue = this.onNewValue.bind(this);
  }
  onNewValue(event) {
    event.preventDefault();
    this.props.setItem(this.props.item.itemId, this.props.item.listId, event.target.value);
  }
  render() {
    console.log(this.props.item);
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <InputGroup.Addon>
              <button type="checkbox">
                <Glyphicon glyph={this.touched ? 'unchecked' : 'plus'} />
              </button>
            </InputGroup.Addon>
            <FormControl type="text" placeholder="List item!!!!" onChange={this.onNewValue} value={this.props.item.value} />
            <InputGroup.Addon>
              <button type="checkbox">
                <Glyphicon glyph="plus" />
              </button>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

Item.propTypes = {
  setItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

