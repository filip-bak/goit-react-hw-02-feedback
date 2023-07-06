import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.object,
    onClick: PropTypes.func,
  };

  handleClick = e => {
    const name = e.target.textContent.toLowerCase();

    // this.props.onLeaveFeedback();

    this.props.onClick(name);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Good</button>
        <button onClick={this.handleClick}>Neutral</button>
        <button onClick={this.handleClick}>Bad</button>
      </div>
    );
  }
}

export default FeedbackOptions;
