import { useState } from "react";

import Section from './Feedback/Section'
import Statistics from './Feedback/Statistics'
import FeedbackOptions from './Feedback/FeedbackOptions'

const App = () => {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const {good, neutral, bad} = state
  
  const countFeedback = (name) => {
    setState(state => ({...state, [name]: state[name] + 1}))
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  };

  function countPositiveFeedbackPercentage() {
    if (good + neutral + bad === 0) {
      return 0;
    } else {
      return Math.round((good / (good + neutral + bad)) * 100);
    }
  }

  const options = Object.keys(state)

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions  options={ options }
                        onLeaveFeedback={countFeedback}>
      </FeedbackOptions>
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={countTotalFeedback()}
                  positivePercentage={countPositiveFeedbackPercentage()}>
      </Statistics> 
    </Section>
    );
}

export default App;
