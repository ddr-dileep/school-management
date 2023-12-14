import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import "./style.scss";
import { Checkbox, FormControlLabel } from "@mui/material";

export const AppInputField = ({
  isError,
  className,
  isRequired,
  onChange,
  defaultValue,
  label,
  id,
  isDisabled,
  placeholder,
  name,
  type,
}) => {
  return (
    <>
      {type === "checkbox" ? (
        <FormControlLabel
          required={isRequired}
          name={name}
          id={id}
          defaultValue={defaultValue}
          error={isError}
          disabled={isDisabled}
          control={<Checkbox onChange={onChange} />}
          label={label}
        />
      ) : (
        <TextField
          name={name}
          className={`app-input-field ${className}`}
          required={isRequired}
          onChange={onChange}
          id={id}
          multiline={type === "textarea"}
          rows={4}
          label={label}
          defaultValue={defaultValue}
          error={isError}
          disabled={isDisabled}
          placeholder={placeholder}
          type={type}
        />
      )}
    </>
  );
};

AppInputField.propTypes = {
  isError: PropTypes.bool,
  className: PropTypes.string,
  isRequired: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
};
