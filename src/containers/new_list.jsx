import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormGroup, InputGroup, FormControl, Row, Col } from 'react-bootstrap';
import { setItem, setTitle } from '../actions/answers_actions';

class NewList extends Component {
  constructor(props) {
    super(props);
    this.onNewValue = this.onNewValue.bind(this);
  }
  onNewValue(event) {
    event.preventDefault();
    const currentAnswers = this.props.answers;
    const currentAnswersLength = Object.keys(currentAnswers).length;
    console.log(currentAnswersLength);
    this.props.setItem(currentAnswersLength, event.target.value, true);
  }
  render() {
    console.log(this.props.answers);
    return (
      <div className="container">
        <Row>
          <Col xs={12} md={5}>
            <div>
              <form>
                <FormGroup>
                  <InputGroup>
                    <InputGroup.Addon>
                      <input type="checkbox" aria-label="..." />
                    </InputGroup.Addon>
                    <FormControl type="text" onChange={this.onNewValue} />
                  </InputGroup>
                </FormGroup>
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
