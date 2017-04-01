import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setItem, setTitle, setNewItem, removeItem } from '../actions/lists_actions';
import List from './list';

class NewList extends Component {
  render() {
    return (
      <div>
        <List setTitle={this.props.setTitle} setItem={this.props.setItem} removeItem={this.props.removeItem}
              setNewItem={this.props.setNewItem} lists={this.props.lists.lists} />
      </div>
    );
  }
}

NewList.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
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
  setNewItem
})(NewList);
