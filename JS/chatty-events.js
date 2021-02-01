const onScroll = () => {
  console.log("Hellow");
};
// window.addEventListener("scroll", onScroll);
window.addEventListener("scroll", _.throttle(onScroll, 2000));

//============================================================
const onInput = () => {
  console.log("input event!");
};
document
  .querySelector(".input")
  .addEventListener("input", _.debounce(onInput, 1000));
