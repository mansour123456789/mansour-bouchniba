import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("./Testimonials"), {
  ssr: false,
});

const Services = () => {
  return (
    <section
      id="services"
      data-nav-tooltip="Services"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Ce que je fais</h3>
        </div>
        <div className="row">
          {/* Conception Web */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Conception Web</h5>
                <p>
Je conçois des sites web attrayants et fonctionnels, axés sur&#39;expérience utilisateur et le design responsive.
                </p>
               </div>
            </div>
          </div>

          {/* Développement Web */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" />
              <div className="feature-content media-body">
                <h5>Développement Web</h5>
                <p>
                  Je développe des applications web robustes et évolutives, en utilisant les dernières technologies pour des performances optimales.
                </p>
              </div>
            </div>
          </div>

          {/* SEO & Marketing Digital */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" />
              <div className="feature-content media-body">
                <h5>SEO & Marketing Digital</h5>
                <p>
                  J&#39;optimise les sites web pour les moteurs de recherche (SEO) et mets en place des stratégies de marketing digital, y compris Google Ads, pour améliorer la visibilité et attirer plus de clients.
                </p>
              </div>
            </div>
          </div>

          {/* Développement Mobile */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" />
              <div className="feature-content media-body">
                <h5>Développement Mobile</h5>
                <p>
Je crée des applications mobiles intuitives et performantes pour les plateformes iOS et Android, offrant une expérience utilisateur fluide.
                </p>
              </div>
            </div>
          </div>

          {/* Plateforme de Réservation d’Hôtel */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Plateforme de Réservation d’Hôtel</h5>
                <p>
                  Site de réservation d’hôtel avec consultation des chambres, des événements associés, des avis et un espace admin pour gérer les contenus et voir les statistiques. (Technologies: Symfony, PHP, MySQL)
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* API de Gestion de Tâches en Temps Réel */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-target" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>API de Gestion de Tâches en Temps Réel</h5>
                <p>
                  API permettant la création et le suivi de tâches avec des notifications instantanées selon les actions des utilisateurs. (Technologies: Node.js, Express, WebSockets)
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* Application de services à domicile */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Application de services à domicile</h5>
                <p>
Application permettant aux clients de publier des demandes de services (plomberie, électricité, jardinage), aux ouvriers de consulter et accepter ces demandes, et à l&#39;administrateur de gérer les comptes et statistiques. (Technologies: Django, Flutter, React, Kubernetes, AWS, PostgreSQL, FCM)
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* Plateforme Mobile Recrutement Ionic Django */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Plateforme Mobile de Recrutement</h5>
                <p>
                  Plateforme mobile de recrutement utilisant Ionic pour le frontend et Django pour le backend, facilitant la gestion des candidatures et des offres d&#39;emploi.
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* Application Mobile de Gestion d’actifs et inventaires */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Application Mobile de Gestion d&#39;actifs et inventaires</h5>
                <p>
                  Application mobile et web pour la gestion d&#39;actifs et inventaires, incluant le suivi des produits. Technologies: Flutter, Spring Boot, Angular.
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* Création de Jeux Vidéo (Unity) */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Création de Jeux Vidéo (Unity)</h5>
                <p>
                  Développement d&#39;un jeu Pac-Man en utilisant Unity, incluant la logique du jeu, l&#39;IA des fantômes et l&#39;interface utilisateur.
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* Site Hotel PHP MVC */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Site Hotel PHP MVC</h5>
                <p>
                  Site de réservation d’hôtel avec architecture MVC en PHP, incluant la gestion des chambres, des réservations et un espace administrateur.
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>

          {/* Développement d’une application web pour la gestion du paramétrage des articles sous SAP */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-desktop" /> {/* Placeholder icon */}
              <div className="feature-content media-body">
                <h5>Développement d’une application web pour la gestion du paramétrage des articles sous SAP</h5>
                <p>
                  Développement d’une application web pour la gestion du paramétrage des articles sous SAP (Django, Python , postgerSQL , pcycopy2).
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a>
              </div>
            </div>
          </div>
          {/* Plateforme Mobile de Recrutement Ionic & Django */}
          <div className="col-sm-6 m-15px-tb">
            <div className="feature-box-01 media">
              <i className="icon theme-bg icon-mobile" /> {/* Icon for mobile */}
              <div className="feature-content media-body">
                <h5>Plateforme Mobile de Recrutement (Ionic & Django)</h5>
                <p>
                  Une plateforme mobile de recrutement complète, développée avec Ionic pour une interface utilisateur réactive et intuitive sur appareils mobiles, et Django pour un backend puissant et sécurisé. Elle offre des fonctionnalités clés telles que la publication et la gestion des offres d&#39;emploi, le suivi détaillé des candidatures, la messagerie intégrée pour la communication entre recruteurs et candidats .
                </p>
                <a href="https://github.com/mansour123456789" target="_blank" rel="noopener noreferrer" className="px-btn px-btn-theme">GitHub</a> {/* Placeholder GitHub link */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
