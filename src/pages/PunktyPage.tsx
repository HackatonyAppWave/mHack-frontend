import React from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { ServicesPageActive } from "../actions/action";
import { connect, ConnectedProps } from "react-redux";

interface PropsType {
  ServicesPageActive: typeof ServicesPageActive;
}

const PunktyPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <section className="punkty-page__container">
      <div className="punkty-page__header">
        <div
          className="link"
          onClick={() => {
            navigate(-1);
            }}
        >
          <div className="punkty-page__icon">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
        </div>

        <h3>Punkty Karne</h3>
      </div>
      <h3 className="punkty-page__title">Suma wszystkich punktów karnych</h3>
      <div className="punkty-page__body">
        <span>3</span> aktywnych puntów karnych
      </div>
      <p className="punkty-page__para">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
        sint possimus, unde sequi labore numquam accusamus temporibus illum!
        Quasi, aliquam officiis quidem odit rerum laboriosam neque atque. Ut,
        aspernatur fuga!
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni et
        dignissimos similique consectetur architecto dolorem nulla culpa. Quae
        ipsa quos praesentium animi eaque, eveniet facere corrupti, temporibus
        voluptates aspernatur aperiam. <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        cupiditate cumque, culpa animi nesciunt velit ratione? Quaerat, placeat
        eveniet! Voluptate quam hic libero repellendus nam ex nihil quisquam
        culpa voluptatem. <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
        praesentium nemo eos, sint deleniti suscipit minus enim hic iste
        explicabo amet fugit itaque placeat sed fuga. Delectus veniam facere
        voluptate.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi nemo et
        iste quo? Placeat, in possimus atque libero laborum aut iusto repellat
        quia amet deserunt, recusandae totam temporibus praesentium quaerat!
      </p>
      <Footer />
    </section>
  );
};

const mapStateToProps = (state: {}) => {
  return {};
};

const connector = connect(mapStateToProps, {
  ServicesPageActive,
});

export default connector(PunktyPage);
