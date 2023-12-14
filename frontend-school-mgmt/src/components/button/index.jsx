import Button from '@mui/material/Button';
import PropTypes from "prop-types";
import "./style.scss";

export const AppButton = ({
  variant = "outlined",
  children,
  isDisabled,
  className,
  onClick,
}) => {
  return (
    <Button
      className={`${className} main-button`}
      onClick={onClick}
      variant={variant}
      disabled={isDisabled}
      color="success"
    >
      {children}
    </Button>
  );
};

AppButton.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};
