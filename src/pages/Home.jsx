import { Suspense, lazy } from "react";
import { NavLink } from "react-router-dom";
import {
  MeenacGarden,
  Partners,
  Projects,
  MasteringShopifyEbook,
  EcommerceIntoReality,
  Testimonials,
} from "../assets/images/cdn";
import { ReactComponent as ShopifyIcon } from "../assets/svg/shopify-icon.svg";
import FeatureCard from "../components/FeatureCard";
import StageCard from "../components/StageCard";
import { useState } from "react";
import { Helmet } from "react-helmet";
import ScrollToTopButton from "../components/ScrollToTopButton";

import Marquee from "react-fast-marquee";
// const Marquee = lazy(() => import("react-fast-marquee"));
const PopupModal = lazy(() => import("../libs/Calendly.js"));
const MediumBlogs = lazy(() => import("../components/MediumBlogs"));
const SubscriberForm = lazy(() => import("../components/SubscriberForm"));

const Home = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleBookConsultation = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <div className="page-container py-0">
      <Helmet>
        <title>
          Pankaj Gurbani - Shopify Store Design, Development, and Marketing.
        </title>
        <meta
          name="description"
          content="Looking for highly skilled Shopify Experts in India? We can help you with Shopify Store Design, Development, Social Media Marketing, SEO, Email Marketing, and Paid Ads."
        />
      </Helmet>

      <ScrollToTopButton />

      {/* Headline, Subtitle, CTA */}
      <section
        aria-label="Hero Section"
        className="max-w section space-y-12 text-center justify-center min-h-[60vh]"
      >
        <h1 className="heading-1 max-w-2xl">
          We design, develop, and grow your{" "}
          <span className="text-heading-highlight dark:text-night-heading-highlight">
            shopify
          </span>{" "}
          store.
        </h1>
        <p className="para-lg">
          More customers. More sales. 🚀
          <br />
          <span className="underline-highlight">Zero</span> stress.
        </p>
        <div className="pt-8 md:pt-0">
          <button onClick={handleBookConsultation} className="btn-cta btn-grad">
            Schedule a <b>Free</b> 30 Mins Consultation
          </button>
        </div>
      </section>

      {/* Calendly */}
      <Suspense fallback={<></>}>
        <PopupModal
          url="https://calendly.com/pankajgurbani/ecommerce"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={document.getElementById("root")}
        />
      </Suspense>

      {/* Partners */}
      <section className="section max-w">
        <p className="text-base tracking-widest uppercase">Trusted By</p>
        <div className="flex flex-row items-center space-x-8">
          <ShopifyIcon className="h-12" />
          <img
            src={Partners.Rivo}
            alt="Rivo logo"
            className="h-11 rounded-lg"
          />
          <img
            src={Partners.Pagefly}
            alt="Pagefly logo"
            className="h-11 rounded-lg"
          />
        </div>
      </section>

      {/* Project images */}
      <section className="flex flex-col items-center mt-20">
        <Marquee speed={60} gradient={false}>
          <img
            src={MeenacGarden.Home}
            className="marquee-img"
            alt="meenac garden shopify shopify store homepage"
            fetchpriority="high"
          />
          <img
            src={Projects.Babylux}
            className="marquee-img"
            alt="Babylux shopify store homepage"
            fetchpriority="high"
            loading="lazy"
          />
          <img
            src={Projects.DollarSign}
            className="marquee-img"
            alt="DollarSign shopify store homepage"
            fetchpriority="high"
            loading="lazy"
          />
          <img
            src={Projects.Lase}
            className="marquee-img"
            alt="LASE shopify store homepage"
            loading="lazy"
          />
        </Marquee>
      </section>

      {/* Explore, how we can help your business grow. */}
      <section className="section max-w">
        <h2 className="heading-2 max-w-md md:max-w-3xl text-center">
          Explore, how we can help your business grow.
        </h2>
        <p className="sub-para max-w-md md:max-w-3xl">
          Our team of Shopify Experts can help you start and grow your online
          business,{" "}
          <span className="underline-highlight">
            so you can focus on what you do best
          </span>
          .
        </p>
        <div className="responsive-flex">
          <StageCard
            subtitle="Stage 1"
            className="bg-card-bg-1 dark:bg-night-card-bg-1"
            title="Begin your journey."
            features={[
              "Setup your Shopify store",
              "Choose and customize your theme",
              "Add products",
              "Create collections",
              "Setup shipping & payment methods",
              "Start selling!",
            ]}
          />
          <StageCard
            subtitle="Stage 2"
            className="bg-card-bg-2 dark:bg-night-card-bg-2"
            title="Level up."
            features={[
              "Stand out with custom themes",
              "Improve user experience",
              "Boost conversion rate",
              "Write copy that sells",
              "Studio quality product images",
              "Build custom strategies",
              "More features",
            ]}
          />
          <StageCard
            subtitle="Stage 3"
            className="bg-card-bg-3 dark:bg-night-card-bg-3"
            title="Become a pro."
            features={[
              "Bring your unique ideas to life with custom storefronts",
              "Develop apps for custom functionality",
              "Streamline and automate manual processes",
              "3D product images",
              "Integrate with other tools and platforms",
            ]}
          />
        </div>
        <NavLink to="/contact" className="btn-cta btn-grad w-full md:w-1/3">
          <span>Let's chat</span>
        </NavLink>
      </section>

      {/* But that's not all, more services */}
      <section aria-label="Additional Services" className="section max-w">
        <div className="max-w-3xl section">
          <h2 className="heading-2 max-w max-w-md md:max-w-3xl text-center">
            But, that’s not all.
          </h2>
          <p className="sub-para max-w-md md:max-w-3xl">
            At each stage, we can help you reach and{" "}
            <span className="underline-highlight">
              build strong connections with your customers
            </span>
            .
          </p>
          <div className="flex flex-col space-y-2">
            <div className="feature-card-container">
              <FeatureCard heading="Social Media Marketing">
                Let us help you create a <b>buzz</b> and connect with your
                audience on social media.
              </FeatureCard>
              <FeatureCard heading="SEO">
                Get found online 👀 with our proven SEO techniques. We'll
                optimize your website to <b>rank higher</b> in search engine
                results.
              </FeatureCard>
            </div>
            <div className="feature-card-container">
              <FeatureCard heading="Email Marketing">
                Stay top of mind with your customers through personalized 💌
                email campaigns. We'll help you craft the <b>perfect message</b>
                .
              </FeatureCard>
              <FeatureCard heading="Paid Ads">
                Drive traffic and sales with our targeted paid advertising
                campaigns 📈 Let us help you reach your <b>ideal audience</b>.
              </FeatureCard>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        aria-label="Testimonials"
        className="section bg-testimonial-section-bg dark:bg-night-testimonial-section-bg"
      >
        <div className="max-w flex flex-col items-center space-y-12 py-16 md:py-18">
          <h2 className="heading-2 max-w max-w-md md:max-w-3xl text-center text-night-heading">
            Hear from our happy clients :)
          </h2>
          <p className="sub-para max-w-md md:max-w-3xl text-night-body">
            I've been able to work with{" "}
            <span className="underline-highlight"> amazing clients</span>, and
            I'm glad that they enjoyed working with me too!
          </p>
          <div className="flex flex-col space-y-8 md:max-w-3xl 2xl:max-w-4xl">
            <img
              src={Testimonials.Effie}
              className="rounded-lg"
              alt="Testimonial of effie zhang from fonteva"
              loading="lazy"
            />
            <img
              src={Testimonials.Ulas}
              className="rounded-lg"
              alt="Testimonial of Ulas Kutuk from fonteva"
              loading="lazy"
            />
            <img
              src={Testimonials.George}
              className="rounded-lg"
              alt="Testimonial of George from LASE"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Let's turn your ecommerce idea into reality */}
      <section className="section max-w pb-20">
        <div className="flex flex-col gap-12 items-center">
          {/* Image */}
          <img
            src={EcommerceIntoReality}
            className="md:w-1/2 object-cover rounded-lg border"
            alt="Turn ecommerce into reality illustration"
            loading="lazy"
          />

          {/* Description */}
          <div className="flex flex-1 flex-col items-center md:items-start space-y-8 px-4">
            <p className="text-xl md:text-2xl max-w-sm text-left md:text-center">
              Let’s turn your ecommerce idea into a{" "}
              <span className="underline-highlight">reality</span>.
            </p>
            <button
              onClick={handleBookConsultation}
              className="btn-cta btn-grad w-full"
            >
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Blogs (Continue exploring) */}
      <section
        aria-label="Ecommerce blogs by Pankaj Gurbani"
        className="section max-w"
      >
        <div className="max-w-3xl section">
          <h2 className="heading-2 max-w max-w-md md:max-w-3xl text-center">
            Learn more about growing your eCommerce business.
          </h2>
          <p className="sub-para max-w-md md:max-w-3xl">
            Check out my blogs for{" "}
            <span className="underline-highlight">
              tips, guides, and insights
            </span>{" "}
            to grow your ecommerce business.
          </p>
          {/* Articles */}
          <Suspense fallback={<></>}>
            <MediumBlogs username="pankajgurbani" />
          </Suspense>
        </div>
      </section>

      {/* Subscribe to my newsletter */}
      <section
        aria-label="Subscribe to my newsletter"
        className="section w-full max-w gap-10 relative"
      >
        <p className="sub-para max-w-md md:max-w-2xl">
          Subscribe to my{" "}
          free weekly newsletter.<br/>Get The best eCommerce tips, content and stories. <span className="underline-highlight">Every Monday</span>.
        </p>
        <iframe
          title="Subscribe to my newsletter"
          src="https://embeds.beehiiv.com/4b367193-1ec0-4170-834c-ef2db56f357a"
          data-test-id="beehiiv-embed"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
          style={{
            borderRadius: "4px",
            border: "2px solid #e5e7eb",
            margin: 0,
            backgroundColor: "transparent",
          }}
        ></iframe>
        <div className="w-20 h-10 bg-[#222222] absolute bottom-2 right-8 md:right-12"></div>
      </section>

      {/* FAQ */}
      <section
        aria-label="Frequently Asked Questions (FAQ)"
        className="section max-w"
      >
        <h2 className="heading-2 max-w max-w-md md:max-w-3xl text-center">
          FAQs
        </h2>
        <div className="qna-root md:max-w-2xl">
          <div className="qna-container">
            <h5>What is Shopify?</h5>
            <p>
              Shopify is an online platform that allows you to create and manage
              your own ecommerce website.
            </p>
          </div>
          <div className="qna-container">
            <h5>How much does it cost to create a Shopify store?</h5>
            <p>
              The cost of creating a Shopify store varies depending on your
              needs and the complexity of the project. Contact me for more
              details.
            </p>
          </div>
          <div className="qna-container">
            <h5>How long does it take to create a custom Shopify store?</h5>
            <p>
              For a basic store, it usually takes around{" "}
              <span className="underline-highlight">15 - 20 days</span>. As the
              complexity increases, so does the time.
            </p>
          </div>
        </div>
      </section>

      {/* Freebie */}
      <section
        aria-label="Free Ebook to learn shopify administration"
        className="section bg-ebook-section-bg dark:bg-night-ebook-section-bg"
      >
        <div className="max-w flex flex-col md:flex-row md:items-center space-y-12 md:space-x-8 md:space-y-0 py-16 md:py-20">
          {/* Image */}
          <img
            src={MasteringShopifyEbook}
            className="md:w-1/2 object-cover rounded-lg border border-black"
            alt="free shopify ebook"
            loading="lazy"
          />

          {/* Description */}
          <div className="flex flex-1 flex-col gap-6 md:gap-8 px-4">
            <h2 className="heading-2 font-bold">
              An A-Z Guide to managing your Shopify store.
            </h2>
            <p className="para">Finding it difficult to use Shopify?</p>
            <p className="para">
              This <span className="underline-highlight">free e-book</span>{" "}
              contains step-by-step instructions with screenshots to perform all
              the common tasks as a Shopify Admin.
            </p>
            <span className="py-2"></span>
            <Suspense fallback={<></>}>
              <SubscriberForm
                inputClass="md:w-48 lg:w-64 py-5 md:py-1"
                btnLabel="Get Free PDF"
                thankYouPara="You will receive an email with your PDF soon."
              />
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
