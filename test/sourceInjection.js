const assert = require('assert');
const scrape = require("../build");

describe("source", function() {
    describe("create", function() {
        it("should return true when the source isn't already present", function() {
          assert.ok(scrape.register("Github Commits", "https://www.google.com/"));
        });
        it("should return true when the source isn't already present", function() {
          assert.ok(scrape.register("Github Issues", "https://www.google.com/"));
        });
        it("should return false when the source is already present", function() {
          assert.equal(scrape.register("Github Issues", "https://www.google.com/"), false);
        });
    });
  });  
