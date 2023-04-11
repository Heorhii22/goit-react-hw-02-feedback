export function Statistics({
  good,
  bad,
  neutral,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) {
  return (
    <>
      <h2>Statistics</h2>
      <p>Positive: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{countTotalFeedback}</p>
      <p>Percentage feedback: {countPositiveFeedbackPercentage}%</p>
    </>
  );
}
