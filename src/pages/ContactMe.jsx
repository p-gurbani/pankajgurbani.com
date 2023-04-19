import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet";

const ContactMe = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_2,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (_) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (emailSent) {
    return (
      <div className="page-container justify-center">
        <Helmet>
          <title>Thanks for getting in touch!</title>
        </Helmet>
        <section className="section flex-col gap-4 h-full items-center">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="heading-2">Thanks for getting in touch!</h2>
            <p className="para">You will find me in your inbox soon :)</p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-container max-w">
      <Helmet>
        <title>Contact - Pankaj Gurbani</title>
        <meta
          name="description"
          content="Available for questions, projects, collaborations, and coffee. ☕️"
        />
      </Helmet>
      <section aria-label="Contact Form" className="section gap-2 mt-16 md:mt-20">
        <h1 className="heading-1 text-center max-w-xl heading-gradient">
          Get in touch.
        </h1>
        <p className="para-md font-medium max-w-md text-center">
          Available for questions, projects, collaborations, and coffee. ☕️
        </p>

        <form
          className="flex gap-4 w-full px-4 md:w-max items-stretch flex-col"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="user-first-name"
              placeholder="First Name"
              type="text"
              required
              className="text-field py-4 flex-1"
              name="first_name"
            />
            <input
              id="user-last-name"
              placeholder="Last Name"
              type="text"
              required
              className="text-field py-4 flex-1"
              name="last_name"
            />
          </div>
          <div className="flex flex-col gap-4">
            <input
              id="user-email"
              placeholder="Email"
              type="email"
              required
              className="text-field py-4 flex-1"
              name="email"
            />
            <textarea
              id="user-message"
              placeholder="Enter your message"
              type="text"
              required
              rows="5"
              className="text-field py-4 flex-1"
              name="message"
            />
          </div>
          <div className="flex flex-col gap-4">
            <button type="submit" className="btn-cta w-full btn-grad">
              <span>Send message</span>
            </button>
          </div>
        </form>

        <p className="para text-gray-600 dark:text-gray-400 max-w-md text-center">
          or send me an email at{" "}<br/>
          <a
            className="underline underline-offset-2 font-medium"
            href="mailto:pankajgurbani.connect@gmail.com"
          >
            pankajgurbani.connect@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
};
export default ContactMe;
