import { useEffect } from "react";

const KeyboardShortcuts = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "KeyD" && event.altKey) {
        let switchEl = document.getElementById("darkmode-switch");
        const clickEvent = new MouseEvent("click", {
          view: window,
          bubbles: true,
          cancelable: true,
        });
        switchEl.dispatchEvent(clickEvent);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <></>;
};
export default KeyboardShortcuts;
