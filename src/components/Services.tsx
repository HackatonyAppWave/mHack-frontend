import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHelmetSafety,
  faCar,
  faNoteSticky,
  faWind,
  faTrain,
  faHeartPulse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { ServicesPageActive } from "../actions/action";
import { connect, ConnectedProps } from "react-redux";

interface PropsType {
  ServicesPageActive: typeof ServicesPageActive;
}

const Services: React.FC<PropsType> = ({ ServicesPageActive }) => {
  return (
    <div className="services__container">
      <div className="services__head">
        <p className="services__head--title">Usługi</p>
        <div className="services__head--buttons">
          <button className="btn btn--head">Wszystkie</button>
        </div>
      </div>
      <div className="services__body">
        <NavLink
          to="/chat"
          className="link"
          onClick={() => ServicesPageActive()}
        >
          <div className="service__element">
            <div
              className="service__element--icon"
              style={{ color: "rgb(211, 61, 97)" }}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <p className="service__element--text">mAsystent</p>
          </div>
        </NavLink>
        <NavLink
          to="/punkty"
          className="link"
          onClick={() => ServicesPageActive()}
        >
          <div className="service__element">
            <div
              className="service__element--icon"
              style={{ color: "rgb(32,79,150)" }}
            >
              <FontAwesomeIcon icon={faHelmetSafety} />
            </div>
            <p className="service__element--text">Punkty karne</p>
          </div>
        </NavLink>

        <div className="service__element">
          <div
            className="service__element--icon"
            style={{ color: "rgb(132,184,100)" }}
          >
            <FontAwesomeIcon icon={faCar} />
          </div>
          <p className="service__element--text">Historia pojazdu</p>
        </div>
        <div className="service__element">
          <div
            className="service__element--icon"
            style={{ color: "rgb(32,79,150)" }}
          >
            <FontAwesomeIcon icon={faNoteSticky} />
          </div>
          <p className="service__element--text">Mandaty</p>
        </div>
        <div className="service__element">
          <div
            className="service__element--icon"
            style={{ color: "rgb(52,127,234)" }}
          >
            <FontAwesomeIcon icon={faWind} />
          </div>
          <p className="service__element--text">Jakość powietrza</p>
        </div>
        <div className="service__element">
          <div
            className="service__element--icon"
            style={{ color: "rgb(211, 61, 97)" }}
          >
            <FontAwesomeIcon icon={faTrain} />
          </div>
          <p className="service__element--text">Blikom</p>
        </div>
        <div className="service__element">
          <div
            className="service__element--icon"
            style={{ color: "rgb(94, 189, 190)" }}
          >
            <FontAwesomeIcon icon={faHeartPulse} />
          </div>
          <p className="service__element--text">eRecepta</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: {}) => {
  return {};
};

const connector = connect(mapStateToProps, {
  ServicesPageActive,
});

export default connector(Services);
