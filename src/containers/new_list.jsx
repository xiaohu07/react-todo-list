import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { forIn } from 'lodash';
import { setItem, setTitle, setNewItem, removeItem, saveNewList } from '../actions/lists_actions';
import List from './list';

class NewList extends Component {
  renderLists() {
    const lists = [];
    const maxListId = Math.max(...Object.keys(this.props.lists.lists));
    forIn(this.props.lists.lists, (list, key) => {
      const listNode = (
        <div key={key}>
          <Col xs={4} className="padding-collapse-right">
            <List setTitle={this.props.setTitle} setItem={this.props.setItem}
                  removeItem={this.props.removeItem} setNewItem={this.props.setNewItem}
                  saveNewList={this.props.saveNewList} lists={list} maxListId={maxListId} />
          </Col>
        </div>
      );
      lists.unshift(listNode);
    });
    return lists;
  }
  render() {
    const lists = this.renderLists();
    return (
      <div>
        <Row>
          {lists}
        </Row>
      </div>
    );
  }
}

NewList.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  saveNewList: PropTypes.func.isRequired,
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
  saveNewList,
  setNewItem
})(NewList);
