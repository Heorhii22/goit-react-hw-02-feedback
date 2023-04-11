import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnGoodClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onBtnNeutralClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBtnNegativeClick = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.bad + this.state.good + this.state.neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((this.state.good * 100) / this.countTotalFeedback());
    }
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback
            onBtnGoodClick={this.onBtnGoodClick}
            onBtnNeutralClick={this.onBtnNeutralClick}
            onBtnNegativeClick={this.onBtnNegativeClick}
          />
        </Section>

        <Section title="Statistics">
          {this.state.good || this.state.bad || this.state.neutral ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
