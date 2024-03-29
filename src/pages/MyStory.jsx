import { AboutMe } from "../assets/images/cdn";
import { Helmet } from "react-helmet";
import { ReactComponent as InstagramIcon } from "../assets/svg/instagram.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../assets/svg/linkedin.svg";
import { NavLink } from "react-router-dom";

const CallToActions = () => {
  return (
    <section className="section px-4">
      <div className="flex flex-col w-full md:w-max items-stretch md:flex-row gap-4">
        <NavLink to="/contact" className="btn-cta btn-grad w-full md:w-max">
          <span>Let's build your project.</span>
        </NavLink>
        <NavLink to="/case-studies" className="btn-secondary w-full md:w-max">
          <span>Explore my work.</span>
        </NavLink>
      </div>
    </section>
  );
};

const MyStory = () => {
  return (
    <div className="page-container">
      <Helmet>
        <title>My Story - Pankaj Gurbani</title>
        <meta name="description" content="Learn more about me and my life." />
      </Helmet>
      {/* In a nutshell */}
      <section aria-label="About me" className="section max-w mt-16 md:mt-20">
        <h1 className="heading-1 text-center max-w-3xl 2xl:max-w-4xl">
          In a nutshell.
        </h1>
        <div className="flex flex-col max-w-3xl md:flex-row md:items-center md:space-x-16 space-y-10 md:space-y-0">
          {/* Profile Image */}
          <img
            src={AboutMe.ProfileImage}
            className="md:w-4/5 object-cover object-top rounded h-[400px]"
            alt="Pankaj Gurbani profile"
          />

          {/* About me in a nutshell */}
          <div className="flex flex-col space-y-6">
            <p className="story-para">
              Pankaj is a Shopify Expert who helps visionary entrepreneurs build
              creative and goal-driven eCommerce websites.{" "}
            </p>
            <p className="story-para">
              He began his career as a web developer and designer, but
              eventually found his passion for eCommerce.
            </p>
            <p className="story-para">
              He works remotely with his team alongside his pooch Candy, who
              keeps wagging her tail while staring at him :)
            </p>
            <div className="flex items-center px-4 space-x-6 md:space-x-4">
              <a
                href="https://www.instagram.com/pankajgurbanii/"
                target="_blank"
                rel="noreferrer"
                className="w-8 social-icon-link"
              >
                <InstagramIcon className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/gurbanipankaj/"
                target="_blank"
                rel="noreferrer"
                className="w-8 social-icon-link"
              >
                <LinkedInIcon className="social-icon" />
              </a>
              <a
                href="https://twitter.com/pankajgurbani_"
                target="_blank"
                rel="noreferrer"
                className="w-8 social-icon-link"
              >
                <TwitterIcon className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToActions />

      {/* The whole story */}
      <section aria-label="The whole story" className="section max-w">
        <h1 className="heading-1 text-center max-w-3xl 2xl:max-w-4xl">
          The whole story.
        </h1>
        <p className="sub-para">
          Let me take you on a journey through my life.
        </p>
        <h3 className="heading-3 max-w-3xl 2xl:max-w-4xl">School days.</h3>
        <img
          src={AboutMe.ChildhoodImage}
          className="object-cover object-top sm:object-center rounded h-[400px] saturate-0"
          alt="Pankaj gurbani childhood"
        />
        <p className="story-para">
          I was born and raised in the city of Ajmer (Rajasthan), India. Growing
          up, I was always curious about how things worked, and that curiosity
          led me to discover my passion for programming.
        </p>
        <p className="story-para">
          At the age of 11, I was introduced to the world of computers, and from
          that moment, I was captivated. Eventually, I earned my 'Bachelor of
          Computer Applications' degree, a milestone that marked the beginning
          of my professional journey.
        </p>
        <h3 className="heading-3 max-w-3xl 2xl:max-w-4xl">
          How I got my first job.
        </h3>
        <p className="story-para">
          During my 2nd year of graduation, I secured a position as a web
          developer at Concretio Apps. Working with a team of exceptional
          talents, I thrived in an environment filled with creativity and
          innovation.
        </p>
        <p className="story-para">
          During this phase, I had the privilege of working with some of the
          most innovative companies across the globe. These experiences
          broadened my perspective and fueled my determination.
        </p>
        <div className="responsive-flex md:max-w-2xl lg:max-w-5xl">
          <img
            src={AboutMe.OfficeSpace}
            className="object-cover object-center rounded md:w-1/2 h-[400px] saturate-50"
            alt="Concretio office space"
          />
          <img
            src={AboutMe.Colleagues}
            className="object-cover object-left rounded md:w-1/2 h-[400px] saturate-50"
            alt="Pankaj Gurbani's colleagues at Concretio Apps"
          />
        </div>
        <p className="story-para">
          After dedicating 3 impactful years to Concretio, I decided to become
          self-employed. It was a difficult decision, but I knew it was the
          right one.
        </p>
        <p className="story-para">
          I started freelancing and worked on several projects, big and small.
        </p>
        <h3 className="heading-3 max-w-xl text-center">
          My passion for entrepreneurship and eCommerce.
        </h3>
        <p className="story-para">
          As I quickly built a reputation for delivering high-quality work on
          time and within budget, my business started to grow. With that growth,
          I began to take on more challenging projects.
        </p>
        <p className="story-para">
          It was around this time that I began specializing in building
          e-commerce websites. I helped many businesses establish a strong
          online presence and felt incredibly fulfilled knowing that I was
          making a difference in their success.
        </p>
        <p className="story-para">
          Although the path of self-employment had its share of uncertainties, I
          never once regretted my decision. The freedom and flexibility that
          came with running my own business were truly invaluable.
        </p>
        <p className="story-para">
          I was able to follow my passion and help others at the same time. It
          was a dream come true.
        </p>
        <h3 className="heading-3 max-w-xl text-center">Present day.</h3>
        <p className="story-para">
          Today, I work remotely as a Shopify Expert, designing and developing
          eCommerce websites that seamlessly merge functionality, aesthetics,
          and purpose. Reflecting on my journey, it's clear that the path to
          this point was filled with unexpected turns and valuable lessons.
        </p>
        <div className="responsive-flex md:max-w-2xl lg:max-w-5xl">
          <img
            src={AboutMe.MySetup}
            className="object-cover object-center rounded md:w-1/2 h-[400px]"
            alt="Pankaj Gurbani's home office setup when he started freelancing"
          />
          <img
            src={AboutMe.MyCurrentSetup}
            className="object-cover object-center rounded md:w-1/2 h-[400px]"
            alt="Pankaj Gurbani's current home office setup"
          />
        </div>
        <p className="story-para">
          Every step along the way has taught me something valuable and helped
          me grow both personally and professionally.
        </p>
        <h3 className="heading-3 max-w-md text-center">
          I'm excited to see where this journey takes me next.
        </h3>
        <p className="story-para">
          I hope my story inspires you to{" "}
          <span className="underline-highlight">
            follow your passion and chase your dreams
          </span>
          , no matter how difficult they may seem.
        </p>
      </section>
      <CallToActions />
    </div>
  );
};
export default MyStory;
