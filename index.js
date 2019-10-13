(function(factory) {
  if (typeof define === "function" && define.amd) {
    define("jwt-sdk", factory());
  } else if (module && typeof module.exports == "function") {
    module.exports = factory();
  } else if (window) {
    window.jwt = factory();
  }
})(function() {
  "use strict"; 
  const TOKEN = 'token';
  const EXPIRED = 'expired';
  const ISSUEDAT = 'issuedAt';

  const TYPE_OBJECT = '[object Object]';
  const TYPE_NULL = '[object Null]';
  const TYPE_STRING = '[object String]';
  const TYPE_NUMBER = '[object Number]';

  function JWT() {
    this[TOKEN] = null;
    this[EXPIRED] = null;
    this[ISSUEDAT] = null;
  }

  /**
   * define properties
   * @param {*} key 
   * @param {*} cb 
   */
  function _defineProperty(key, cb){
    JWT.prototype[key] = cb
  }

  /**
   * use package
   * @params type [axios]
   */
  _defineProperty('use', function(package) {
    if(package.interceptors && package.interceptors){
      function rejectPromise(error) {
        return Promise.reject(error);
      }
      package.interceptors.request.use((config)=>{
        this.tokenExpired();
        return config;
      }, rejectPromise);
      package.interceptors.response.use((response)=>{
        return response;
      }, rejectPromise);
    }
  });

  /**
   * loyout 
   */
  _defineProperty('logout', function(path){
    if(!path) throw new Error("path parameter must be passed!");
    this.clearSession();
    window.location.href = path;
  });

  /**
   * token is expired
   */
  _defineProperty("isExpired", function(){
    return Date.now() > this.getExpiredTimestamp();
  });

  /**
   * expired time in timestamp
   */
  _defineProperty("getExpiredTimestamp", function(){
    return +utils.getSession(EXPIRED)
  });

  /**
   * expired time in timestamp
   */
  _defineProperty("getIssuedAtTimestamp", function(){
    return +utils.getSession(ISSUEDAT)
  });

  /**
   * expired time in timestamp
   */
  _defineProperty("getToken", function(){
    return utils.getSession(TOKEN)
  });

  // http request
  var http = {};

  // utils
  var utils = {
    // parse &a=xx&b=xxx to {a:xxx, b:xxx}
    querystring: function() {},
    getType(val){
      return Object.prototype.toString.call(val);
    },
    getSession(key){
      return localStorage.getItem(key);
    },
    setSession(key, val){
      if(this.getType(val) == TYPE_OBJECT) localStorage.setItem(key, JSON.stringify(val));
    }
  };

  return new JWT();
});
