import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <button className="Back-btn" onClick={handleBack}>
      Back
    </button>
  );
};

export default BackButton;
