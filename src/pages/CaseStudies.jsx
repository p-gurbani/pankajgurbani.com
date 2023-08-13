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
      <section
        aria-label="Case Studies"
        className="section mt-16 md:mt-20"
      >
        {/* Heading */}
        <h1 className="heading-1 text-center max-w-2xl">
          No bragging, just awesome work. 😉
        </h1>
        <p className="para-lg max-w-xs md:max-w-lg">Have a look at some of our best projects.</p>

        {/* Work */}
        <div className="project-gallery pt-12 max-w w-full px-4">
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
                Your go-to brand for stunning indoor plants that liven up your
                home or office. <br />
                <br />
                We joined forces to revamp their brand, set up a thriving online
                store, and help them deeply connect with their customers on
                social media.
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
                Organic skincare that's pure and true. We teamed up to discover
                their brand voice and form genuine connections with their
                audience.
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
                A top-tier catering business, serving nothing but the best.
                Together, we crafted a seamless online booking system for their
                customers' convenience.
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
