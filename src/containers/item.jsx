import React, { Component, PropTypes } from 'react';
import { isNull } from 'lodash';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.onNewValue = this.onNewValue.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }
  onNewValue(event) {
    event.preventDefault();
    this.props.setItem(this.props.item.itemId, this.props.item.listId, event.target.value);
    if (this.props.item.itemId === this.props.maxItemId) {
      this.props.setNewItem(this.props.maxItemId + 1, this.props.item.listId, null);
    }
  }
  onRemoveItem(event) {
    event.preventDefault();
    this.props.removeItem(this.props.item.itemId, this.props.item.listId);
  }
  render() {
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button>
                <Glyphicon glyph={isNull(this.props.item.value) ? 'plus' : 'unchecked'} />
              </Button>
            </InputGroup.Button>
            <FormControl type="text" placeholder="List item!!!!" onChange={this.onNewValue} value={this.props.item.value} />
            <InputGroup.Button>
              <Button onClick={this.onRemoveItem}><Glyphicon glyph="remove-circle" /></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

Item.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  maxItemId: PropTypes.number.isRequired,
  last: PropTypes.bool.isRequired
};

