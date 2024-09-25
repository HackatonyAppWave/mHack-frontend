import React from "react";
import { NavLink } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faIdCard,
  faFolder,
  faQrcode,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import {
  HomePageActive,
  HomePageActiveAction,
  ServicesPageActive,
  ServicesPageActiveAction,
} from "../actions/action";

interface PropsType {
  footerMenu: {
    home: boolean;
    services: boolean;
  };
  HomePageActive: typeof HomePageActive;
  ServicesPageActive: typeof ServicesPageActive;
}

const Footer: React.FC<PropsType> = ({
  footerMenu,
  HomePageActive,
  ServicesPageActive,
}) => {
  return (
    <div className="footer__continaer">
      <NavLink to="/" className="link" onClick={() => HomePageActive()}>
        <div
          className={
            footerMenu.home ? "footer__element active" : "footer__element"
          }
        >
          <div className="footer__element--icon">
            <FontAwesomeIcon icon={faHouse} />
          </div>
          <div className="footer__element--text">Start</div>
        </div>
      </NavLink>
      <div className="footer__element">
        <div className="footer__element--icon">
          <FontAwesomeIcon icon={faIdCard} />
        </div>
        <div className="footer__element--text">Dokumenty</div>
      </div>
      <NavLink
        to="/services"
        className="link"
        onClick={() => ServicesPageActive()}
      >
        <div
          className={
            footerMenu.services ? "footer__element active" : "footer__element"
          }
        >
          <div className="footer__element--icon">
            <FontAwesomeIcon icon={faFolder} />
          </div>
          <div className="footer__element--text">Usługi</div>
        </div>
      </NavLink>

      <div className="footer__element">
        <div className="footer__element--icon">
          <FontAwesomeIcon icon={faQrcode} />
        </div>
        <div className="footer__element--text">Kod QR</div>
      </div>
      <div className="footer__element">
        <div className="footer__element--icon">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
        <div className="footer__element--text">Więcej</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  footerMenu: {
    home: boolean;
    services: boolean;
  };
}) => {
  return {
    footerMenu: state.footerMenu,
  };
};

const connector = connect(mapStateToProps, {
  HomePageActive,
  ServicesPageActive,
});

export default connector(Footer);
