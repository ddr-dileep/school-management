import { AppInputField } from "../index";
import PropTypes from "prop-types";

export const AppForm = ({ inputFields, onInputChange }) => {
  return (
    <>
      {inputFields.map((field) => {
        return (
          <AppInputField
            id={field.id}
            key={field.id}
            name={field.name}
            type={field.type}
            label={field.placeholder}
            placeholder={field.placeholder}
            onChange={onInputChange}
            isRequired={field.isRequired}
          />
        );
      })}
    </>
  );
};

AppForm.propTypes = {
  inputFields: PropTypes.arrayOf(
    PropTypes.shape({
      placeholder: PropTypes.string.isRequired,
    })
  ).isRequired,
  onInputChange: PropTypes.func.isRequired,
  id: PropTypes.string,
};
