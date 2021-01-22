import React from "react";
import PropTypes from "prop-types";
import Styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={Styles.title}>{title}</h2>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
