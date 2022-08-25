import React from "react";
import Icono1 from "../../assets/img/Servicios/icono.png";
import Icono2 from "../../assets/img/Servicios/mundo.png";
import { FiArrowDownCircle } from "react-icons/fi";

const HomeIcons = () => {
  return (
    <section id="manifiesto" className="container">
      <div className="container-icons">
        <div className="container-icon-description">
          <div className="animation-sideToSide">
            <img src={Icono1} alt="icono 1" />
          </div>
          <h2>Tus ideas</h2>
          <p>Manifesta tus ideas que nosotros las volvemos realidad</p>
        </div>
        <div className="container-icon-description">
          <div className="animation-rotate360">
            <img src={Icono2} alt="icono 2" />
          </div>
          <h2>En todo el mundo</h2>
          <p>
            Diseños de alta calidad para Argentina como para el resto del mundo
          </p>
        </div>
      </div>
      <button className="btn-home">
        <a href="#servicios">
          <p> Nuestros servicios  </p>
          <FiArrowDownCircle />
        </a>
      </button>
    </section>
  );
};

export default HomeIcons;
