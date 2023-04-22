import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SubscriberForm = ({
  btnLabel = "Subscribe",
  inputClass = "",
  formClass = "",
  btnClass = "",
  thankYouHeading = "Thank you!",
  thankYouPara = "Check your inbox to confirm your subscription.",
}) => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID_1,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID,
      )
      .then(
        (result) => {
          setEmailSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (emailSent) {
    return (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <h3 className="heading-3">{thankYouHeading}</h3>
          <p className="para">{thankYouPara}</p>
        </div>
      </div>
    );
  }

  return (
    <form
      ref={form}
      className={`flex w-full md:w-max items-stretch flex-col md:flex-row space-x-0 space-y-4 md:space-y-0 ${formClass}`}
      onSubmit={sendEmail}
    >
      <input
        id="user-email"
        placeholder="Enter your email"
        type="email"
        required
        className={`text-field md:rounded-r-none flex-1 ${inputClass}`}
        name="email"
      />
      <button
        type="submit"
        className={`btn-cta btn-grad md:rounded-l-none md:w-max md:border-l-0 w-full ${btnClass}`}
      >
        <span>{btnLabel}</span>
      </button>
    </form>
  );
};

export default SubscriberForm;
