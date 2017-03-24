import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import { setItem, setTitle } from '../actions/lists_actions';
import Items from './items';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.onNewTitle = this.onNewTitle.bind(this);
  }
  onNewTitle(event) {
    this.props.setTitle();
  }
  render() {
    console.log(this.props.lists);
    return (
      <div className="container">
        <Row>
          <Col xs={12} md={5}>
            <div>
              <form>
                <FormGroup>
                  <FormControl type="text" placeholder="Enter title here" onChange={this.onNewTitle} />
                </FormGroup>
                <Items setItem={this.props.setItem} items={this.props.lists[0].items} />
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
  setTitle: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};
