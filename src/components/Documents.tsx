import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faIdBadge } from "@fortawesome/free-solid-svg-icons";

const Documents: React.FC = () => {
  return (
    <div className="documents__container">
      <div className="documents__head">
        <p className="documents__head--title">Dokumenty</p>
        <div className="documents__head--buttons">
          <button className="btn btn--head">Dodaj</button>
          <button className="btn btn--head">Wszystkie</button>
        </div>
      </div>
      <div className="documents__body">
        <div className="document__element">
          <div className="document__element--icon">
            <FontAwesomeIcon icon={faIdBadge} />
          </div>
          <div className="document__element--text">
            <p className="element__text">mDowód</p>
            <div className="element__icon">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
