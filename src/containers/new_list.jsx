import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import { setItem, setTitle, setNewItem, loadSessionStorage, loadInitial } from '../actions/lists_actions';
import List from './list';

class NewList extends Component {
  render() {
    console.log(this.props.lists, 'props');
    return (
      <div>
        <List setTitle={this.props.setTitle} setItem={this.props.setItem}
              setNewItem={this.props.setNewItem} lists={this.props.lists.lists} />
      </div>
    );
  }
}

NewList.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
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
  loadSessionStorage,
  loadInitial,
  setNewItem
})(NewList);
