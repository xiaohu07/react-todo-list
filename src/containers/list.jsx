import React, { Component, PropTypes } from 'react';
import { FormGroup, FormControl, Panel, Col, Button } from 'react-bootstrap';
import Items from './items';


// TODO: 1> Save list 2> Create modal for editing 3> Search 4> Add scss to webpack 5> Color field

export default class List extends Component {
  constructor(props) {
    super(props);
    this.onSetTitle = this.onSetTitle.bind(this);
    this.onSaveNewList = this.onSaveNewList.bind(this);
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
  }
  render() {
    return (
      <div>
        <Col sm={9} xs={12}>
          <Panel header={this.props.lists.title}>
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
                <Button bsStyle="primary" className="pull-right" onClick={this.onSaveNewList}>Done</Button>
              </div>
            </div>
          </Panel>
        </Col>
      </div>
    );
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
