import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faHelmetSafety,
  faCar,
  faNoteSticky,
  faWind,
  faTrain,
  faHeartPulse,
  faCheckToSlot,
  faBus,
  faTree,
  faPlane,
  faWallet,
  faFire,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { HomePageActive, ServicesPageActive } from "../actions/action";
import { connect, ConnectedProps } from "react-redux";
import { NavLink } from "react-router-dom";

interface PropsType {
  ServicesPageActive: typeof ServicesPageActive;
  HomePageActive: typeof HomePageActive;
}

const ServicesBody: React.FC<PropsType> = ({ ServicesPageActive }) => {
  return (
    <div className="services__page--body">
      <NavLink
        to="/chat"
        className="link elem"
        onClick={() => ServicesPageActive()}
      >
        <div className="service__element">
          <div className="service__element--title">
            <div
              className="service__element--icon icon-1"
              style={{ color: "rgb(211, 61, 97)" }}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
            <p className="service__element--text">mAsystent</p>
          </div>
          <div className="service__element--icon icon-2">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </NavLink>

      <NavLink
        to="/punkty"
        className="link elem"
        onClick={() => ServicesPageActive()}
      >
        <div className="service__element">
          <div className="service__element--title">
            <div
              className="service__element--icon icon-1"
              style={{ color: "rgb(32,79,150)" }}
            >
              <FontAwesomeIcon icon={faHelmetSafety} />
            </div>
            <p className="service__element--text">Punkty karne</p>
          </div>
          <div className="service__element--icon icon-2">
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
      </NavLink>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(132,184,100)" }}
          >
            <FontAwesomeIcon icon={faCar} />
          </div>
          <p className="service__element--text">Historia pojadu</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(32,79,150)" }}
          >
            <FontAwesomeIcon icon={faNoteSticky} />
          </div>
          <p className="service__element--text">Mandaty</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(52,127,234)" }}
          >
            <FontAwesomeIcon icon={faWind} />
          </div>
          <p className="service__element--text">Jakość powietrza</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(211, 61, 97)" }}
          >
            <FontAwesomeIcon icon={faTrain} />
          </div>
          <p className="service__element--text">Blikom</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(94, 189, 190)" }}
          >
            <FontAwesomeIcon icon={faHeartPulse} />
          </div>
          <p className="service__element--text">eRecepta</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(214,92,105)" }}
          >
            <FontAwesomeIcon icon={faCheckToSlot} />
          </div>
          <p className="service__element--text">Wybory</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(132,184,100)" }}
          >
            <FontAwesomeIcon icon={faBus} />
          </div>
          <p className="service__element--text">Bezpieczny autobus</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(99, 120, 74)" }}
          >
            <FontAwesomeIcon icon={faTree} />
          </div>
          <p className="service__element--text">Naruszenie środowiska</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(215, 104, 48)" }}
          >
            <FontAwesomeIcon icon={faPlane} />
          </div>
          <p className="service__element--text">Polak za granicą</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(170, 139, 110)" }}
          >
            <FontAwesomeIcon icon={faWallet} />
          </div>
          <p className="service__element--text">ePłatości</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(74, 74, 74)" }}
          >
            <FontAwesomeIcon icon={faFire} />
          </div>
          <p className="service__element--text">Dodatek gazowy</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
      <div className="service__element">
        <div className="service__element--title">
          <div
            className="service__element--icon icon-1"
            style={{ color: "rgb(176, 106, 37)" }}
          >
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <p className="service__element--text">Karta MKA</p>
        </div>
        <div className="service__element--icon icon-2">
          <FontAwesomeIcon icon={faChevronRight} />
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
  HomePageActive,
});

export default connector(ServicesBody);
