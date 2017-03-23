import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import { setItem, setTitle } from '../actions/answers_actions';

class Items extends Component {
  constructor(props) {
    super(props);
    this.onNewValue = this.onNewValue.bind(this);
    this.touched = false;
  }
  onNewValue(event) {
    event.preventDefault();
    this.touched = true;
    const currentAnswers = this.props.answers;
    const currentAnswersLength = Object.keys(currentAnswers).length;
    console.log(currentAnswersLength);
    if (currentAnswersLength === 0) {
      this.props.setItem(currentAnswersLength, event.target.value, true);
    } else if (currentAnswersLength > 0) {
      this.props.setItem(0, event.target.value, true);
    }
  }
  renderItem() {
    const newItem = (
      <FormGroup>
        <InputGroup>
          <InputGroup.Addon>
            <button type="checkbox">
              <Glyphicon glyph={this.touched ? 'unchecked' : 'plus'} />
            </button>
          </InputGroup.Addon>
          <FormControl type="text" placeholder="List item" onChange={this.onNewValue} />
          <InputGroup.Addon>
            <button type="checkbox">
              <Glyphicon glyph="plus" />
            </button>
          </InputGroup.Addon>
        </InputGroup>
      </FormGroup>
    );
    return newItem;
  }
  render() {
    console.log(this.props.answers);
    const currentAnswers = this.props.answers;
    const currentAnswersLength = Object.keys(currentAnswers).length;
    const items = [];
    const newItem = this.renderItem();
    items.push(newItem);
    console.log(currentAnswersLength);
    console.log(items.length);
    if (currentAnswersLength === items.length) {
      items.push(newItem);
    }
    return (
      <div>
        {items.map((item, index) =>
          <div key={index} className={'test'+index}>{item}</div>
        )}
      </div>
    );
  }
}

Items.propTypes = {
  setItem: PropTypes.func.isRequired,
  answers: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    answers: state.answers
  };
}

export default connect(mapStateToProps, {
  setItem,
  setTitle
})(Items);
