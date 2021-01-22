import React from "react";
import PropTypes from "prop-types";
import Styles from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div className={Styles.status}>
        <p className={Styles.good}>Good: {good}</p>
        <p className={Styles.neutral}>Neutral: {neutral}</p>
        <p className={Styles.bad}>Bad: {bad}</p>
      </div>
      <p className={Styles.items}>Total: {total}</p>
      <p className={Styles.positive}>
        Positive feedback: {positivePercentage}%
        <progress max="100" value={positivePercentage}>
          Positive feedback: {positivePercentage} %
        </progress>
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
