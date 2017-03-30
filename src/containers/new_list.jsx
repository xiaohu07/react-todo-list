import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import { setItem, setTitle, setNewItem, removeItem, completeItem, recoverItem } from '../actions/lists_actions';
import List from './list';

class NewList extends Component {
  render() {
    console.log(this.props.recoverItem);
    console.log(this.props.completeItem);
    return (
      <div>
        <List setTitle={this.props.setTitle} setItem={this.props.setItem} removeItem={this.props.removeItem}
              setNewItem={this.props.setNewItem} lists={this.props.lists.lists} completeItem={this.props.completeItem}
              recoverItem={this.props.recoverItem} />
      </div>
    );
  }
}

NewList.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  completeItem: PropTypes.func.isRequired,
  recoverItem: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

export default connect(mapStateToProps, {
  setItem,
  setTitle,
  removeItem,
  completeItem,
  recoverItem,
  setNewItem
})(NewList);
