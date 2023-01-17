import PropTypes from 'prop-types';
import Notification from './Notification'
import { StyleStatistics, StyleGood, StyleNeutral, StyleBad } from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <StyleStatistics>
                <h2>Statistics</h2>
                {total === 0 ? (<Notification message="There is no feedback"></Notification>) : 
                (<div>
                    <StyleGood>Good: { good }</StyleGood>
                    <StyleNeutral>Neutral: {neutral}</StyleNeutral>
                    <StyleBad>Bad: {bad}</StyleBad>
                    <p>Total: {total}</p>
                    <p>Positive feedback: { positivePercentage }%</p>
                </div>)} 
            </StyleStatistics>  
    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}

export default Statistics












