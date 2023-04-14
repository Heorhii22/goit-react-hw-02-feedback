import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export function Feedback({
  onBtnGoodClick,
  onBtnNeutralClick,
  onBtnNegativeClick,
}) {
  return (
    <div className={css.button__list}>
      <button type="button" onClick={onBtnGoodClick}>
        Good
      </button>
      <button type="button" onClick={onBtnNeutralClick}>
        Neutral
      </button>
      <button type="button" onClick={onBtnNegativeClick}>
        Bad
      </button>
    </div>
  );
}

Feedback.propTypes = {
  onBtnGoodClick: PropTypes.func.isRequired,
  onBtnNeutralClick: PropTypes.func.isRequired,
  onBtnNegativeClick: PropTypes.func.isRequired,
};
