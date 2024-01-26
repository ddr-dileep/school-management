import PropTypes from "prop-types";
import "./heading.scss";

export const AppHeading = ({ title, subtitle, className }) => {
  return (
    <>
      <h2 className={`${className} app-heading`}>{title}</h2>
      {subtitle && <span className="app-subtitle">{subtitle}</span>}
    </>
  );
};

AppHeading.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};
