// utils/scrollToSection.js
export const scrollToSection = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start", // can be "center" or "end"
    });
  }
};
