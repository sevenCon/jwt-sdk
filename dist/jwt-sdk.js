(function(factory) {
  if (typeof define === "function" && define.amd) {
    define("jwt-sdk", factory());
  } else if (module && typeof module.exports == "function") {
    module.exports = factory();
  } else if (window) {
    window.jwt = factory();
  }
})(function() {

  let jwt = {};
  console.log(jwt);

  return jwt;
});
