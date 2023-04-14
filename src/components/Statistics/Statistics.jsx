import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export function Statistics({
  good,
  bad,
  neutral,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <p className={css.statisticItem}>Positive: {good}</p>
      <p className={css.statisticItem}>Neutral: {neutral}</p>
      <p className={css.statisticItem}>Bad: {bad}</p>
      <p className={css.statisticItem}>Total: {countTotalFeedback}</p>
      <p className={css.statisticItem}>
        Percentage feedback: {countPositiveFeedbackPercentage}%
      </p>
    </>
  );
}

Statistics.propTypes = {
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
