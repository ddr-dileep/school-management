import React from "react";
import "./notFound.scss";
import { AppButton } from "../../components";
import { useNavigate } from "react-router-dom";
import { Assets } from "../../utils/Assets";

export const NotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="not-found">
      <div className="not-found-container">
        <img className="not-found-container-image" src={Assets.NotImage} alt="404-image" />
        <AppButton className="not-found-goBackButton" onClick={goBackHandler}>
          Go back
        </AppButton>
      </div>
    </div>
  );
};

// how to write new functino for adding two numbers
