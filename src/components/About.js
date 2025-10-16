import Image from "next/image"; // Import Image component

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="À propos"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <Image src="/static/img/about-me.png" title="" alt="About Me" width={500} height={500} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>À propos de moi.</h3>
              </div>
              <div className="about-text">
                <h3>
                  Ingénieur logiciel full-stack .
                </h3>
                <p>
                  Passionné par le DevOps et l&#39;automatisation. Expérimenté dans la mise en place de pipelines CI/CD, le déploiement de conteneurs avec Docker et Kubernetes.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                          <p>Name : Bouchniba Mansour  </p>    &nbsp; &nbsp; &nbsp;   <p>Age : 28</p>       
                          
                      </div>
                    </div>
                  </div>
                  
                 
                  <div className="col-auto">
                    <div className="media align-items-center">
                       <p>Mail : <a href="mailto:mansboch@gmail.com">mansboch@gmail.com</a></p>

                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <p>github : <a href="https://github.com/mansour123456789">github@mansour123456789</a></p>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <p>linkedin : <a href="https://www.linkedin.com/in/mansour-bouchniba-891085282/">linkedin@mansour.com</a></p>
                    </div>
                  </div>
               
                <div className="btn-bar">
                  <a className="px-btn px-btn-theme" href="#contactus">
                    <span>Contactez-moi</span>
                  </a>
                  <a className="px-btn px-btn-theme" href="#services">
                    <span>Projets</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>Formation & Compétences</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 m-15px-tb">
            <ul className="aducation-box">
              <li>
                <span>2023 – 2025</span>
                <h6>Cycle Ingénieur en Informatique</h6>
                <p>Université Tekup, Ariana</p>
              </li>
              <li>
                <span>2018 – 2022</span>
                <h6>Diplôme de Technicien Supérieur en Informatique</h6>
                <p>Institut Supérieur des Études Technologiques de Bizerte</p>
              </li>
              <li>
                <span>2017 – 2018</span>
                <h6>Baccalauréat Informatique</h6>
                <p>Lycée Attarien, Ariana</p>
              </li>
            </ul>
          </div>
          <div className="col-lg-7 ml-auto m-15px-tb">
            <div className="skills-box">
              <h3>Mes compétences</h3>
              <div className="skill-lt">
                <h6>Angular</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>.NET</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "85%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Spring Boot</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>DevOps (Docker, Kubernetes, AWS)</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "75%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Node</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Git/GitLab</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Express</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
               <div className="skill-lt">
                <h6>React</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>SQL/NoSQL</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Scrum</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Amazon Web Services</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Flutter</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Python</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }} />
                </div>
              </div>
              {/* /skill */}
              <div className="skill-lt">
                <h6>Django</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              <div className="skill-lt">
                <h6>Ionic</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "80%" }} />
                </div>
              </div>
              <div className="skill-lt">
                <h6>Flutter</h6>
                <div className="skill-bar">
                  <div className="skill-bar-in" style={{ width: "90%" }} />
                </div>
              </div>
              {/* /skill */}
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>EXPÉRIENCE PROFESSIONNELLE</h3>
        </div>
        <div className="resume-box">
        
        
            <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/logo.jfif" title="" alt="Company Logo" width={100} height={100} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Stage de perfectionnement</h6>
                  <label>VIRTUAL-ERA | Tunis | 05/2025 – 09/2025</label>
                  <div className="rb-time">Temps Plein</div>
                  <p>
Conception d&#39;une solution de gestion d&#39;inventaire avec une application mobile (Flutter) et une plateforme web (Spring Boot).
                  </p>
                </div>
              </div>
            </div>
          </div>
         
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/logo4.png" title="" alt="Company Logo" width={100} height={100} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Freelance</h6>
                  <label>ECOLOBLOC | En ligne | 2024</label>
                  <div className="rb-time">Projet Personnel</div>
                  <p>
Création d&#39;un site web pour une entreprise de matériaux écologiques brevetés (ECOLOBLOC).
                  </p>
                </div>
              </div>
            </div>
          </div>
            <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/logo2.jfif" title="" alt="Company Logo" width={100} height={100} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Stage de fin d&#39;études</h6>
                  <label>Latécoère | Mourouj | 01/2023 – 06/2023</label>
                  <div className="rb-time">Temps Plein</div>
                  <p>
Développement d&#39;une application web pour la gestion du paramétrage des articles sous SAP (Django, Python).
                  </p>
                </div>
              </div>
            </div>
          </div>
           <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/logo1.jfif" title="" alt="Company Logo" width={100} height={100} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Stage de perfectionnement</h6>
                  <label>Radio Tunisienne (ERT) | Tunis | 01/2020 – 02/2020</label>
                  <div className="rb-time">Temps Plein</div>
                  <p>
Conception et développement d&#39;une application web de gestion des stagiaires (Angular, Spring Boot).
                  </p>
                </div>
              </div>
            </div>
          </div>
        <div className="resume-row">
          <div className="row">
            <div className="col-sm-3 col-md-3 col-xl-2">
              <div className="rb-left">
                <Image src="/static/img/logo3.jfif" title="" alt="Company Logo" width={100} height={100} />
              </div>
            </div>
            <div className="col-sm-9 col-md-9 col-xl-10">
              <div className="rb-right">
                <h6>Stage d&#39;initiation</h6>
                <label>Office National de la Télédiffusion (ONT) | 01/2019 – 02/2019 | Tunis</label>
                <div className="rb-time">Temps Plein</div>
                <p>
Découverte du milieu professionnel et pratiques de maintenance informatique. Missions : assistance technique, installation et configuration de matériel, maintenance et dépannage.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    </section>
  );
};
export default About;
