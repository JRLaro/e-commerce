import React from "react";
import "./button.scss";

const Button = ({ children, ...otherProps }) => {
  return (
    <button {...otherProps} className="btn">
      <div className="google-icon-wrapper">
        <img
          alt="googleLogo"
          class="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      {children}
    </button>
  );
};

export default Button;
