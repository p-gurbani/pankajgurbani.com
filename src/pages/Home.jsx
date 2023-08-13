import { Suspense, lazy, useRef } from "react";
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
const PopupModal = lazy(() => import("../libs/Calendly.js"));
const SubscriberForm = lazy(() => import("../components/SubscriberForm"));
// const Marquee = lazy(() => import("react-fast-marquee"));
// const MediumBlogs = lazy(() => import("../components/MediumBlogs"));

const Home = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const faqRef = useRef(null);

  const expandFAQ = (e) => {
    const faqItems = faqRef.current.querySelectorAll(".qna-container");
    faqItems.forEach((el) => {
      if (el.contains(e.target)) {
        el.classList.toggle("qna-active");
      } else {
        el.classList.remove("qna-active");
      }
    });
  };

  const handleBookConsultation = () => {
    setIsCalendlyOpen(true);
  };

  return (
    <div className="page-container pt-0">
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
        <h1 className="heading-1 max-w-2xl lg:max-w-4xl">
          Launch Your{" "}
          <span className="text-heading-highlight dark:text-night-heading-highlight">
            Dream Shopify Store
          </span>{" "}
          in Less than 14 Days.
        </h1>
        {/* <p className="para-lg">Maximize Sales. 🚀 Minimize stress. 🥳</p> */}
        <p className="para-lg max-w-xs md:max-w-lg">
          Power your sales. 🚀 Lower your stress. 🥳
        </p>
        <div className="pt-12 px-4 md:pt-8">
          <button onClick={handleBookConsultation} className="btn-cta btn-grad">
            Book a <b>Free</b> 30-Minute Consultation Today!
          </button>
          <div className="para-xs mt-2">
            Zero obligations. Just a friendly zoom call to discuss your goals :)
          </div>
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

      {/* Copy */}
      {/* <section className="section max-w">
        <p className="sub-para max-w-md md:max-w-xl">
          You have a brilliant business idea and you're eager to turn it into a
          thriving online store. But, the technicalities, design, and
          optimization process <b>feels overwhelming</b>. Right?
        </p>
      </section> */}

      {/* Explore, how we can help your business grow. */}
      <section className="section max-w">
        <h2 className="heading-2 max-w-md md:max-w-3xl text-center">
          Say goodbye to headaches and let us handle the heavy lifting.
        </h2>
        <p className="sub-para max-w-md md:max-w-2xl">
          Explore, how we can help your business grow. So you can focus on{" "}
          <span className="underline-highlight">what you do best</span>.
        </p>
        <div className="responsive-flex">
          <StageCard
            subtitle="Stage 1"
            className="bg-card-bg-1 dark:bg-night-card-bg-1"
            title="Begin your journey."
            features={[
              "Setup and customize your Shopify store",
              "Add products & collections",
              "Setup shipping & payment methods",
              "Start selling!",
            ]}
          />
          <StageCard
            subtitle="Stage 2"
            className="bg-card-bg-2 dark:bg-night-card-bg-2"
            title="Level up."
            features={[
              "Improve user experience",
              "Boost conversion rate",
              "Write copy that sells",
              "Create custom landing pages",
              "Email marketing & automation",
            ]}
          />
          <StageCard
            subtitle="Stage 3"
            className="bg-card-bg-3 dark:bg-night-card-bg-3"
            title="Become a pro."
            features={[
              "Develop custom themes & apps",
              "Connect your store with Instagram, Google, Pinterest, and more",
              "Streamline and automate manual processes",
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
          <p className="sub-para max-w-md md:max-w-2xl">
            We're here to help you reach and{" "}
            <span className="underline-highlight">
              build strong connections
            </span>{" "}
            with your customers at every stage.
          </p>
          <div className="flex flex-col space-y-2">
            <div className="feature-card-container">
              <FeatureCard heading="Social Media Marketing">
                Let's create a <i>buzzz</i> and connect with your audience on
                social media.
              </FeatureCard>
              <FeatureCard heading="SEO">
                Watch your website climb the search engine rankings!
              </FeatureCard>
            </div>
            <div className="feature-card-container">
              <FeatureCard heading="Email Marketing">
                Stay top of mind with your customers through personalized email
                campaigns.
              </FeatureCard>
              <FeatureCard heading="Paid Ads">
                Let us help you reach your ideal audience and drive
                traffic and sales.
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
            See what our clients are saying :)
          </h2>
          <p className="sub-para max-w-md md:max-w-2xl text-night-body">
            Working with{" "}
            <span className="underline-highlight">incredible clients</span> has
            been a joy, and their satisfaction is what fuels my passion for
            excellence!
          </p>
          <div className="flex flex-col space-y-8 md:max-w-3xl 2xl:max-w-4xl">
            <img
              src={Testimonials.MeenakshiRani}
              className="rounded-lg"
              alt="Testimonial of Meenakshi Rani from Meenac Garden"
              loading="lazy"
            />
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
      <section className="section max-w pb-12">
        <div className="flex flex-col gap-12 items-center">
          {/* Image */}
          <img
            src={EcommerceIntoReality}
            className="md:w-1/2 object-cover rounded-lg border"
            alt="Turn ecommerce into reality illustration"
            loading="lazy"
          />

          {/* Description */}
          <div className="flex flex-1 flex-col items-center space-y-8 px-4">
            <h2 className="heading-2 max-w max-w-md md:max-w-2xl text-center">
              Let’s turn your ecommerce idea into a reality.
            </h2>
            <p className="sub-para max-w-md md:max-w-3xl">
              If you're interested, we can dive into the possibilities together.
              {/* during a 30-minute consultation. */}
            </p>
            <button
              onClick={handleBookConsultation}
              className="btn-cta btn-grad"
            >
              Book a <b>Free</b> 30-Minute Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Blogs (Continue exploring) */}
      {/* <section
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
          <Suspense fallback={<></>}>
            <MediumBlogs username="pankajgurbani" />
          </Suspense>
        </div>
      </section> */}

      {/* FAQ */}
      <section
        aria-label="Frequently Asked Questions (FAQ)"
        className="section max-w"
      >
        <h2 className="heading-2 max-w max-w-md md:max-w-3xl text-center pb-4">
          FAQs
        </h2>
        <div ref={faqRef} className="qna-root md:max-w-6xl">
          <div className="qna-container qna-active" onClick={expandFAQ}>
            <h3 className="qna-question">
              Is there any commitment required after the consultation call?
            </h3>
            <p className="qna-answer">
              Absolutely not! The consultation call is a chance for me to
              understand your needs and offer recommendations. You're under{" "}
              <span className="underline-highlight">no obligation</span> to
              proceed with our services. It's completely your decision, and I
              respect that.
            </p>
          </div>
          <div className="qna-container" onClick={expandFAQ}>
            <h3 className="qna-question">
              How much do your Shopify services cost?
            </h3>
            <p className="qna-answer">
              Our pricing is tailored to suit the specific needs of each client.
              We offer customized packages that align with your requirements and
              budget. Let's have a chat during the consultation call, and I'll
              provide you with a transparent quote.
            </p>
          </div>
          <div className="qna-container" onClick={expandFAQ}>
            <h3 className="qna-question">
              How long does it take to launch my Shopify store?
            </h3>
            <p className="qna-answer">
              The timeline for launching your store depends on various factors
              such as its complexity and your requirements. <br />
              <br />
              However, we're committed to delivering timely results. For a basic
              Shopify store, it usually takes{" "}
              <span className="underline-highlight">less than 14 days</span>.
              During the consultation call, we'll discuss your project's
              timeline and work together to achieve your desired launch date.
            </p>
          </div>
          <div className="qna-container" onClick={expandFAQ}>
            <h3 className="qna-question">
              What if I already have a Shopify store but need improvements?
            </h3>
            <p className="qna-answer">
              If you have an existing store that needs enhancements or a
              complete makeover, we can identify areas for improvement and
              implement the necessary changes to improve your store's
              performance.
            </p>
          </div>
          <div className="qna-container" onClick={expandFAQ}>
            <h3 className="qna-question">
              How do I get started with your Shopify services?
            </h3>
            <p className="qna-answer">
              Getting started is easy! Simply schedule a free no-obligations
              30-minute consultation with us, and we'll discuss your goals,
              requirements, and expectations.
              <br /> <br />
              If interested, you can{" "}
              <span
                className="underline-highlight cursor-pointer"
                onClick={handleBookConsultation}
              >
                click here
              </span>{" "}
              to schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe to my newsletter */}
      <section
        aria-label="Subscribe to my newsletter"
        className="section w-full max-w gap-10 relative pt-12"
      >
        <div className="space-y-8 flex flex-col items-center">
          <h2 className="heading-2 max-w max-w-md md:max-w-3xl text-center">
            Your monday mornings. <br /> Just got better. ☕
          </h2>
          <p className="sub-para max-w-md md:max-w-3xl">
            Subscribe to my weekly eCommerce marketing newsletter. (It's free)
          </p>
        </div>
        <iframe
          title="Subscribe to my newsletter"
          src="https://embeds.beehiiv.com/4b367193-1ec0-4170-834c-ef2db56f357a"
          data-test-id="beehiiv-embed"
          width="100%"
          height="320"
          frameBorder="0"
          scrolling="no"
          style={{
            borderRadius: "12px",
            border: "1px solid #95979b",
            margin: 0,
            backgroundColor: "transparent",
          }}
        ></iframe>
        <div className="w-20 h-10 bg-[#121212] absolute bottom-2 right-8 md:right-12"></div>
      </section>

      {/* Freebie */}
      {/* <section
        aria-label="Free Ebook to learn shopify administration"
        className="section bg-ebook-section-bg dark:bg-night-ebook-section-bg"
      >
        <div className="max-w flex flex-col md:flex-row md:items-center space-y-12 md:space-x-8 md:space-y-0 py-16 md:py-20">
          <img
            src={MasteringShopifyEbook}
            className="md:w-1/2 object-cover rounded-lg border border-black"
            alt="free shopify ebook"
            loading="lazy"
          />
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
      </section> */}
    </div>
  );
};
export default Home;
