import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { forIn } from 'lodash';
import NewItem from './newItem';
import CompletedItem from './completedItem';
import { completeItem, recoverItem } from '../actions/lists_actions';

class Items extends Component {
  renderItems() {
    const newItems = [];
    const completedItems = [];
    const maxItemId = Math.max(...Object.keys(this.props.items));
    forIn(this.props.items, (item, key) => {
      if (!item.completed) {
        const newItem = (
          <div key={key}>
            <NewItem setItem={this.props.setItem} setNewItem={this.props.setNewItem} removeItem={this.props.removeItem}
                  completeItem={this.props.completeItem} item={item} maxItemId={maxItemId} />
          </div>
        );
        newItems.push(newItem);
      } else {
        const completedItem = (
          <div key={key}>
            <CompletedItem setItem={this.props.setItem} removeItem={this.props.removeItem}
                           recoverItem={this.props.recoverItem} item={item} />
          </div>
        );
        completedItems.push(completedItem);
      }
    });
    return (
      <div>
        {newItems}
        <hr />
        {completedItems}
      </div>
    );
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
  completeItem: PropTypes.func.isRequired,
  recoverItem: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}

export default connect(mapStateToProps, {
  completeItem,
  recoverItem,
})(Items);
