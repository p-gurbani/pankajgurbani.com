import { useEffect } from "react";

const ScrollToTopButton = () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    const btn = document.getElementById("scrolltotop");

    function scrollFunction() {
      if (
        document.body.scrollTop > 500 ||
        document.documentElement.scrollTop > 500
      ) {
        btn.classList.remove("hidden");
      } else {
        btn.classList.add("hidden");
      }
    }

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <button
      id="scrolltotop"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 hidden opacity-90 hover:opacity-100 p-5 z-10 bg-card-bg dark:bg-night-card-bg rounded-full shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        strokeWidth="2.5"
        stroke="currentColor"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
export default ScrollToTopButton;
