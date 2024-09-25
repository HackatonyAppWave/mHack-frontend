import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";

const Head: React.FC = () => {
  return (
    <div className="head__container">
      <div className="head__user">JK</div>
      <div className="head__notifications">
        <FontAwesomeIcon icon={faBell} />
      </div>
    </div>
  );
};

export default Head;
