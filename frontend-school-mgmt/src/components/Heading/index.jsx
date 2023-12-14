import PropTypes from "prop-types";

export const AppHeading = ({ title, className }) => {
  return <h2 className={`${className} app-heading`}>{title}</h2>;
};

AppHeading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
