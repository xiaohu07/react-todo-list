import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Row, Col, Glyphicon } from 'react-bootstrap';
import { setItem, setTitle } from '../actions/answers_actions';
import Items from './items';

class NewList extends Component {
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
    this.props.setItem(currentAnswersLength, event.target.value, true);
  }
  render() {
    return (
      <div className="container">
        <Row>
          <Col xs={12} md={5}>
            <div>
              <form>
                <Items setItem={this.props.setItem} answers={this.props.answers} />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

NewList.propTypes = {
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
})(NewList);
