import React from "react";
import { useNavigate } from "react-router-dom";
import { GoBackIcon } from "../../../../imgs/icons";

const GoBackBtn = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div>
      <button
        onClick={goBack}
        className="flex flex-row rounded go__back-btn border py-1 px-2 border-slate-300 hover:border-slate-400"
      >
        <GoBackIcon /> BACK
      </button>
    </div>
  );
};

export default GoBackBtn;
