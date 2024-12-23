import React from "react";
import PropTypes from "prop-types";
import styles from "./InformationBoxComponentStyles";

const InformationBox = ({ title, imagePath, description }) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <img src={imagePath} alt={`${title} icon`} style={styles.icon} />
      </div>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

InformationBox.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InformationBox;
