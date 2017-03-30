import React, { Component, PropTypes } from 'react';
import { isNull } from 'lodash';
import { FormGroup, InputGroup, FormControl, Glyphicon, Button } from 'react-bootstrap';

export default class CompletedItem extends Component {
  constructor(props) {
    super(props);
    this.onNewValue = this.onNewValue.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
    this.onRecoverItem = this.onRecoverItem.bind(this);
  }
  componentWillMount() {
    this.glyph = 'check';
  }
  onNewValue(event) {
    event.preventDefault();
    this.props.setItem(this.props.item.itemId, this.props.item.listId, event.target.value);
    this.glyph = 'unchecked';
  }
  onRemoveItem(event) {
    event.preventDefault();
    this.props.removeItem(this.props.item.itemId, this.props.item.listId);
  }
  onRecoverItem(event) {
    event.preventDefault();
    this.props.recoverItem(this.props.item.itemId, this.props.item.listId);
    console.log('recover')
    this.glyph = 'unchecked';
  }
  render() {
    console.log(this.props.item);
    return (
      <div>
        <FormGroup>
          <InputGroup>
            <InputGroup.Button>
              <Button onClick={this.onRecoverItem}>
                <Glyphicon glyph={this.glyph} />
              </Button>
            </InputGroup.Button>
            <FormControl type="text" placeholder="Completed Item!" onChange={this.onNewValue} value={this.props.item.value} />
            <InputGroup.Button>
              <Button onClick={this.onRemoveItem}><Glyphicon glyph="remove-circle" /></Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

CompletedItem.propTypes = {
  setItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  recoverItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};
