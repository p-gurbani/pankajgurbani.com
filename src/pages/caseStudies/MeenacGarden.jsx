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
          Meenac Garden is a thriving UAE-based business that specializes in
          selling exquisite indoor plants for homes and offices.
        </p>
        <p className="story-para">
          The project's main goal was to design a fully customized Shopify store
          that reflects Meenac Garden's unique brand identity and delivers a
          flawless shopping journey for their customers.
        </p>
        <p className="story-para">
          <b>Project Duration:</b> 6 Weeks
        </p>

        {/* Challenge */}
        <h2 className="heading-2 pt-10">The Challenge ⛳️</h2>
        <p className="story-para">
          While Meenac Garden had a strong presence on social media channels,
          their sales strategy was limited by relying solely on these platforms.
          <br /> <br />
          The lack of flexibility and customization options made it difficult to
          showcase their full product range effectively. Moreover, the absence
          of a dedicated online store restricted their potential for growth and
          expansion.
        </p>

        {/* Solution */}
        <h2 className="heading-2 pt-10">The Solution 🚀</h2>
        <ul className="list-decimal space-y-5 px-6 md:px-2 story-para">
          <li>
            <p>
              After careful analysis and consultation with the client, our team
              determined that a fully customized Shopify store would best cater
              to their specific requirements.
            </p>
          </li>
          <li>
            <p>
              To bring their vision to life, we skillfully modified the "Sense"
              theme, ensuring it perfectly aligns with their revamped brand
              image and seamlessly integrates all requested features.
            </p>
          </li>
          <li>
            <p>
              We added a user-friendly megamenu for effortless navigation,
              showcasing the product categories and simplifying the shopping
              experience.
            </p>
          </li>
          <li>
            <p>
              Additionally, we added a wishlist feature, making it easy for
              customers to save their favorite products for later.
            </p>
          </li>
          <li>
            <p>
              The product pages were dynamically designed to feature
              high-quality product images, detailed descriptions, dynamic
              features, and customer reviews, inspiring trust and confidence in
              potential buyers.
            </p>
          </li>
          <li>
            <p>
              As an essential part of their social media strategy, we integrated
              a live Instagram feed, displaying the latest posts from Meenac
              Garden's Instagram account, further engaging customers with their
              brand.
            </p>
          </li>
          <li>
            <p>
              To empower them in managing their store effectively, we provided
              comprehensive documentation and conducted live training sessions,
              ensuring they feel confident in handling their new
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
