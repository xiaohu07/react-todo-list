import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, Panel, Col, Button, Modal, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import { forIn, isNull } from 'lodash';
import Items from './items';
import { COMPLETED_TEXT, COLORS } from '../constants/index';


// TODO: 1> Save list 2> Create modal for editing
// 3> Search 4> Add scss to webpack 5> Color field 6> Only save not empty new list

export default class List extends Component {
  constructor(props) {
    super(props);
    this.onSetTitle = this.onSetTitle.bind(this);
    this.onSaveNewList = this.onSaveNewList.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      showModal: false
    };
  }
  onSetTitle(event) {
    event.preventDefault();
    this.props.setTitle(this.props.lists.listId, event.target.value);
  }
  onSaveNewList(event) {
    event.preventDefault();
    if (this.props.lists.listId === this.props.maxListId) {
      const newListId = this.props.maxListId + 1;
      this.props.saveNewList(newListId);
    }
    if (!this.props.isNewList) {
      this.closeModal();
    }
  }
  openModal() {
    this.setState({ showModal: true });
  }
  closeModal() {
    this.setState({ showModal: false });
  }
  renderColors() {
    const colors = [];
    forIn(COLORS, (color, key) => {
      const background = {
        backgroundColor: color,
        borderRadius: '50%',
        width: '50px',
        height: '50px'
      };
      const colorSpan = (
        <span key={key} style={background}>{key}</span>
      );
      colors.push(colorSpan);
    });
    return colors;
  }
  renderNewList() {
    return (
      <div>
        <Col sm={7} xs={9} xsOffset={2}>
          <Panel>
            <div>
              <form>
                <FormGroup>
                  <FormControl type="text"
                               placeholder="Enter title here"
                               onChange={this.onSetTitle}
                               value={this.props.lists.title} />
                </FormGroup>
                <Items setItem={this.props.setItem} setNewItem={this.props.setNewItem}
                       removeItem={this.props.removeItem} items={this.props.lists.items} />
              </form>
              <div>
                <div>
                  {this.renderColors()}
                </div>
                <Button bsStyle="primary" className="pull-right" onClick={this.onSaveNewList}>{this.props.isNewList ? 'Save' : 'Done'}</Button>
              </div>
            </div>
          </Panel>
        </Col>
      </div>
    );
  }
  renderListPreview() {
    let existingLists = null;
    const newItems = [];
    const completedItems = [];
    forIn(this.props.lists.items, (item, key) => {
      if (!item.completed && !isNull(item.value)) {
        const newItem = (
          <ListGroupItem key={key}>
            <Glyphicon glyph="unchecked" />
            &nbsp;&nbsp;
            <span>{item.value}</span>
          </ListGroupItem>
        );
        newItems.push(newItem);
      }
      if (item.completed) {
        const completedItem = (
          <ListGroupItem key={key}>
            <Glyphicon glyph="check" />
            &nbsp;&nbsp;
            <span className="text-md" style={COMPLETED_TEXT}>{item.value}</span>
          </ListGroupItem>
        );
        completedItems.push(completedItem);
      }
    });
    if (!this.props.isNewList) {
      existingLists = (
        <div>
          <Panel header={this.props.lists.title} onClick={this.openModal}>
            <ListGroup fill>
              {newItems}
              {completedItems}
            </ListGroup>
          </Panel>
          <Modal show={this.state.showModal} onHide={this.closeModal}>
            <Modal.Footer>
              {this.renderNewList()}
            </Modal.Footer>
          </Modal>
        </div>
      );
    }
    return existingLists;
  }
  render() {
    const newList = this.renderNewList();
    const existingLists = this.renderListPreview();
    return (this.props.isNewList ? newList : existingLists);
  }
}

List.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  saveNewList: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired,
  maxListId: PropTypes.number.isRequired,
  isNewList: PropTypes.bool.isRequired
};
