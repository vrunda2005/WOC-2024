import React from "react";
import PropTypes from "prop-types";

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

const styles = {
  container: {
    background: "linear-gradient(135deg, rgb(34, 172, 200), rgb(5, 68, 85))",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
    color: "white",
    width: "320px",
    margin: "20px auto",
    position: "relative",
  },
  iconContainer: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#004457",
    position: "absolute",
    top: "-35px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
  title: {
    fontSize: "20px",
    margin: "40px 0 10px",
  },
  description: {
    fontSize: "14px",
    lineHeight: "1.4",
  },
};

InformationBox.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default InformationBox;
