import Isotope from "isotope-layout";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-content", {
      itemSelector: ".grid-item",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".grid-item",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <section
      id="work"
      data-nav-tooltip="Portefeuille"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Mon Portfolio.</h3>
        </div>
        <div className="portfolio-filter-01">
          <ul className="filter nav">
            <li
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
              data-filter="*"
            >
              Tous
            </li>
            <li
              className={`c-pointer ${activeBtn("symfony")}`}
              onClick={handleFilterKeyChange("symfony")}
              data-filter=".symfony"
            >
              Symfony
            </li>
            <li
              className={`c-pointer ${activeBtn("nodejs")}`}
              onClick={handleFilterKeyChange("nodejs")}
              data-filter=".nodejs"
            >
              Node.js
            </li>
            <li
              className={`c-pointer ${activeBtn("angular")}`}
              onClick={handleFilterKeyChange("angular")}
              data-filter=".angular"
            >
              Angular
            </li>
            <li
              className={`c-pointer ${activeBtn("django")}`}
              onClick={handleFilterKeyChange("django")}
              data-filter=".django"
            >
              Django
            </li>
          </ul>
        </div>{" "}
        {/* Portfolio Filter */}
        <div className="portfolio-content grid-gutter-lg grid-col-3 lightbox-gallery">
          <div className="grid-item symfony">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Plateforme de Réservation d’Hôtel</h5>
                <span>Symfony, PHP, MySQL</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/m-portfolio-1.jpg" alt="Portfolio Image 1" width={400} height={300} />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-1.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item nodejs">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">API de Gestion de Tâches en Temps Réel</h5>
                <span>Node.js, Express, WebSockets</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/m-portfolio-2.jpg" alt="Portfolio Image 2" width={400} height={300} />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-2.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item angular">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Plateforme de Réservation d’Hôtel</h5>
                <span>Angular, .NET, PayPal</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/m-portfolio-3.jpg" alt="Portfolio Image 3" width={400} height={300} />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-3.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
          <div className="grid-item django">
            <div className="portfolio-box-01">
              <div className="portfolio-info">
                <h5 className="white-color font-weight-bold">Application de services a domicile</h5>
                <span>Django, Flutter, React, Kubernetes</span>
              </div>
              <div className="portfolio-img">
                <Image src="/static/img/m-portfolio-4.jpg" alt="Portfolio Image 4" width={400} height={300} />
                <div className="portfolio-icon">
                  <a
                    href="static/img/m-portfolio-4.jpg"
                    className="gallery-link"
                  >
                    <span className="ti-plus" />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* grid item */}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
