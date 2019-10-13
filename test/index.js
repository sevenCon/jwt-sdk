let assert = require("assert");
let JWT = require("../index.js");
describe("JWT", function() {
  describe("#auth()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});
