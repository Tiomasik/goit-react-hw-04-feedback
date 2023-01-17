import { useState } from "react";

import Section from './Feedback/Section'
import Statistics from './Feedback/Statistics'
import FeedbackOptions from './Feedback/FeedbackOptions'

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const arrayButton = ['good', 'neutral', 'bad'];

  const total = countTotalFeedback()
  const positivePercentage = countPositiveFeedbackPercentage()
  
  const countFeedback = ( data ) => {
    switch(data) {
      case 'good':
        setGood(prevState => prevState + 1)
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1)
        break;

      case 'bad':
        setBad(prevState => prevState + 1)
        break;

      default:
        return;
    }
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

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions  options={ arrayButton }
                        onLeaveFeedback={countFeedback}>
      </FeedbackOptions>
      <Statistics good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={positivePercentage}>
      </Statistics> 
    </Section>
    );
}

export default App;
