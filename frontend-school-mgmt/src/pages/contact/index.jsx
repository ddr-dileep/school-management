import React, { useState } from "react";
import "./contact.scss";
import { AppButton, AppForm, AppHeading, WhiteSpace } from "../../components";
import { formConstants } from "../../utils/constants";

export const ContactUs = () => {
  const [formValues, setFormValues] = useState({});

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="contact">
      <div className="contact-top-image">contact us page</div>
      <div className="contact-form">
        <AppHeading
          title="Get in touch"
          subtitle="fill the form we will connect soon..."
        />
        <WhiteSpace className="contact-form-white-space" />
        <AppForm
          inputFields={formConstants.contactUsFields}
          onInputChange={onInputChange}
        />
        <AppButton className="contact-form-button">Send </AppButton>
      </div>
    </div>
  );
};
