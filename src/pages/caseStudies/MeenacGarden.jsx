import { MeenacGarden as MeenacGardenImg } from "../../assets/images/cdn";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const MeenacGarden = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Case Study | Meenac Garden - Pankaj Gurbani</title>
        <meta
          name="description"
          content="Discover how we helped Meenac Garden rebrand, create their online store, and grow their business."
        />
      </Helmet>
      <section className="section max-w mt-16 md:mt-20">
        <div className="flex flex-col items-center gap-2">
          <span className="uppercase text-md font-medium text-gray-500 tracking-[6px]">
            CASE STUDY
          </span>
          <h1 className="heading-1 max-w-3xl 2xl:max-w-4xl">Meenac Garden</h1>
        </div>
      </section>
      <section className="section max-w">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <img
                src={MeenacGardenImg.Home}
                className="object-cover rounded-lg shadow h-[280px] w-full"
                alt="Meenac garden website home page"
              />
            </div>
            <div className="flex-1">
              <img
                src={MeenacGardenImg.Newsletter}
                className="object-cover rounded-lg shadow h-[280px] w-full"
                alt="Meenac garden collections page"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <img
                src={MeenacGardenImg.MegaMenu}
                className="object-cover rounded-lg shadow h-[280px] w-full"
                alt="Meenac garden website mega menu"
              />
            </div>
            <div className="flex-1">
              <img
                src={MeenacGardenImg.PDP}
                className="object-cover rounded-lg shadow h-[280px] w-full"
                alt="Meenac garden product detail page"
              />
            </div>
          </div>
        </div>
        {/* Overview */}
        <h2 className="heading-2">Overview</h2>
        <p className="story-para">
          Meenac Garden is a small business based in UAE that sells indoor
          plants for home and office decor.
        </p>
        <p className="story-para">
          The objective of the project was to create a fully customized Shopify
          store that would reflect the brand image and provide customers with a
          seamless shopping experience.
        </p>
        <p className="story-para">
          <b>Project Duration:</b> 6 Weeks
        </p>

        {/* Challenge */}
        <h2 className="heading-2 pt-10">The Challenge ⛳️</h2>
        <p className="story-para">
          Selling only through social media channels lacked flexibility and
          customization options, while also limiting growth.
        </p>

        {/* Solution */}
        <h2 className="heading-2 pt-10">The Solution 🚀</h2>
        <ul className="list-decimal space-y-5 px-6 md:px-2 story-para">
          <li>
            <p>
              Our team proposed a Shopify store as the best solution to meet the
              client’s needs.
            </p>
          </li>
          <li>
            <p>
              We fully modified the “Sense” theme to match the new brand image
              and incorporated all the requested features.
            </p>
          </li>
          <li>
            <p>
              The megamenu allowed for easy navigation and showcased the
              different product categories, while the wishlist allowed customers
              to save their favorite products for later.
            </p>
          </li>
          <li>
            <p>
              The dynamic product page featured high-quality product images,
              detailed descriptions, and reviews.
            </p>
          </li>
          <li>
            <p>
              The live Instagram feed displayed the latest posts from Meenac
              Garden's Instagram account.
            </p>
          </li>
          <li>
            <p>
              We also provided the client with detailed documentation and live
              training sessions to ensure they could easily manage their new
              Shopify store.
            </p>
          </li>
        </ul>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-1 gap-4">
            <div className="flex-1">
              <img
                src={MeenacGardenImg.MobileHome}
                className="object-cover rounded-lg shadow w-full"
                alt="Meenac garden website home page - mobile version"
              />
            </div>
            <div className="flex-1">
              <img
                src={MeenacGardenImg.MobileNewsletter}
                className="object-cover rounded-lg shadow w-full"
                alt="Meenac garden newsletter popup - mobile version"
              />
            </div>
          </div>
          <div className="flex flex-1 gap-4">
            <div className="flex-1">
              <img
                src={MeenacGardenImg.MobilePDP}
                className="object-cover rounded-lg shadow w-full"
                alt="Meenac garden product detail page - mobile version"
              />
            </div>
            <div className="flex-1">
              <img
                src={MeenacGardenImg.MobileTestimonials}
                className="object-cover rounded-lg shadow w-full"
                alt="Meenac garden testimonials section - mobile version"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <h2 className="heading-2 pt-10">Results</h2>
        <p className="story-para">
          The project is a success, with the new store meeting the client's
          objectives and improving their online sales and customer engagement.
        </p>
        <p className="story-para">
          The custom features we implemented have helped to provide a unique and
          seamless shopping experience for their customers.
        </p>
        <p className="story-para">
          The documentation and training have ensured that the client can manage
          their store with ease.
        </p>
      </section>

      <section className="section px-4">
        <div className="flex flex-col w-full md:w-max md:flex-row gap-4">
          <NavLink to="/contact" className="btn-cta btn-grad w-full md:w-max">
            <span>Let's build your project.</span>
          </NavLink>
          <NavLink to="/case-studies" className="btn-secondary w-full md:w-max">
            <span>More case studies</span>
          </NavLink>
        </div>
      </section>
    </div>
  );
};
export default MeenacGarden;
