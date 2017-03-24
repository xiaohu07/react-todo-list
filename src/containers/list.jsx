import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import Items from './items';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.onSetTitle = this.onSetTitle.bind(this);
  }
  onSetTitle(event) {
    event.preventDefault();
    this.props.setTitle(this.props.lists[0].listId, event.target.value);
  }
  render() {
    console.log(this.props.lists, 'lists');
    return (
      <div className="container">
        <Row>
          <Col xs={12} md={5}>
            <div>
              <form>
                <FormGroup>
                  <FormControl type="text"
                               placeholder="Enter title here"
                               onChange={this.onSetTitle}
                               value={this.props.lists[0].title} />
                </FormGroup>
                <Items setItem={this.props.setItem} setNewItem={this.props.setNewItem} items={this.props.lists[0].items} />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

List.propTypes = {
  setItem: PropTypes.func.isRequired,
  setNewItem: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};
