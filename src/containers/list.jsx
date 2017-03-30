import React, { Component, PropTypes } from 'react';
import { FormGroup, InputGroup, FormControl, Row, Col, Button } from 'react-bootstrap';
import Items from './items';


// TODO: 1> Save list  2> Complete items

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
                <Items setItem={this.props.setItem} setNewItem={this.props.setNewItem}
                       removeItem={this.props.removeItem} items={this.props.lists[0].items}
                       completeItem={this.props.completeItem} />
              </form>
              <div>
                <Button bsStyle="primary" className="pull-right">Done</Button>
              </div>
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
  completeItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  lists: PropTypes.object.isRequired
};
