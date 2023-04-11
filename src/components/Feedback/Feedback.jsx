export function Feedback({
  onBtnGoodClick,
  onBtnNeutralClick,
  onBtnNegativeClick,
}) {
  return (
    <div className="button__list">
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
