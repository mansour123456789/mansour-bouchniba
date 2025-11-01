import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <section
      id="blog"
      data-nav-tooltip="Blog"
      className="pp-section pp-scrollable section"
    >
      <div className="container">
        <div className="title">
          <h3>Certifications.</h3>
        </div>
        <div className="row">
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
                
                  <a>
                    <Image src="/static/img/scrum.JPG" alt="Scrum Certification" width={500} height={400} />
                  </a>
               
              </div>
              <div className="blog-info">
                <div className="meta">Professional Scrum Master™ I (PSM I)</div>
                <h6>
                  <Link href="https://www.credly.com/badges/1d747dd2-79f1-4774-9732-7aed06cd0ecc/linked_in?t=svzyv8">
                    <a>
                    Je suis ravi d’annoncer que j’ai réussi la certification Professional Scrum Master I (PSM I) délivrée par Scrum.org. Cette certification atteste de ma maîtrise des fondamentaux du cadre Scrum !
                    </a>
                  </Link>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-md-6 m-15px-tb">
            <div className="blog-grid">
              <div className="blog-img">
              
                  <a>
                    <Image src="/static/img/ace.jpg" alt="ACE Multicloud Network Associate Certification" width={500} height={400} />
                  </a>
               
              </div>
              <div className="blog-info">
                <div className="meta">ACE Multicloud Network Associate</div>
                <h6>
                 
                    <a>
                     Fier détenteur de la certification ACE Multicloud Network Associate, délivrée par Aviatrix. Cette certification valide ma compréhension approfondie des principes fondamentaux du réseau cloud et de la sécurité dans un environnement multicloud englobant AWS, Azure, GCP et OCI.
                       </a>
                
                </h6>
              </div>
            </div>
          </div>
       
       
        </div>
      </div>
    </section>
  );
};
export default Blog;
