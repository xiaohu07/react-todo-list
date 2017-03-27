import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.onNewValue = this.onNewValue.bind(this);
    this.touched = false;
  }
  onNewValue(event) {
    event.preventDefault();
    this.touched = true;
    this.props.setItem(this.props.item.itemId, this.props.item.listId, event.target.value);
    if (this.props.last) {
      this.props.setNewItem(this.props.item.itemId + 1, this.props.item.listId, null);
    }
  }
  render() {
    console.log(this.props.item, 'item');
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
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

Item.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  last: PropTypes.bool
};

