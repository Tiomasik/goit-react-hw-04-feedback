import PropTypes from 'prop-types';
import { List } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return  <List>
                {options.map(option =>
                (<button key={option} type='button' onClick={() => onLeaveFeedback(option)}>{option}</button>))}
            </List>  
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
    
export default FeedbackOptions