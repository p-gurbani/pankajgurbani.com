import { MeenacGarden, Projects } from "../assets/images/cdn";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Case Studies - Pankaj Gurbani</title>
        <meta
          name="description"
          content="Explore our case studies and see how we've helped our clients achieve success. Discover how we can help take your business to the next level. Contact us today to get started."
        />
      </Helmet>
      <section className="section gap-12 mt-16 md:mt-20">
        {/* Heading */}
        <h1 className="heading-1 text-center max-w-xl">
          Some of my{" "}
          <span className="text-heading-highlight dark:text-night-heading-highlight">
            best
          </span>{" "}
          works.
        </h1>

        {/* Work */}
        <div className="project-gallery max-w w-full px-4">
          {/* Meenac Garden */}
          <div className="project-wrapper">
            <div className="project-img-box">
              <img src={MeenacGarden.Cover} alt="Meenac Garden Project Cover" />
            </div>
            <div className="project-desc-box">
              {/* Logo */}
              <img src={MeenacGarden.Logo} alt="Meenac Garden Logo" />
              {/* Desc */}
              <p className="para project-desc">
                A brand selling indoor plants for home/office decor. We helped
                them rebrand, create their online store, and grow their
                business.
              </p>
              <p className="project-categories">
                Branding | E-commerce | Social Media
              </p>
              {/* View case study button */}
              <NavLink to="/case-study/meenac-garden" className="btn-secondary">
                <span>View Case Study</span>
              </NavLink>
            </div>
          </div>

          {/* Paavni */}
          <div className="project-wrapper lg:flex-row-reverse">
            <div className="project-img-box">
              <img src={Projects.PaavniCover} alt="Paavni Project Cover" />
            </div>
            <div className="project-desc-box">
              {/* Logo */}
              <img src={Projects.PaavniLogo} alt="Paavni Logo" />
              {/* Desc */}
              <p className="para project-desc">
                Organic skincare that's pure and true, we helped Paavni find
                their brand voice and connect with their audience anew.
              </p>
              <p className="project-categories">Branding | Social Media</p>
              {/* View case study button */}
              <button className="btn-secondary">
                <span>Coming soon...</span>
              </button>
            </div>
          </div>

          {/* LASE */}
          <div className="project-wrapper">
            <div className="project-img-box">
              <img src={Projects.LaseCover} alt="LASE Project Cover" />
            </div>
            <div className="project-desc-box">
              {/* Logo */}
              <img
                src={Projects.LaseLogo}
                style={{ height: "50px" }}
                alt="Lase Logo"
              />
              {/* Desc */}
              <p className="para project-desc">
                A catering business that serves the best, with a brand new logo
                and a website to impress. We helped them build an online booking
                system.
              </p>
              <p className="project-categories">Branding | E-commerce</p>
              {/* View case study button */}
              <button className="btn-secondary">
                <span>Coming soon...</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CaseStudies;
