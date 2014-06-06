'use strict';
var App    = require('../lib/{%= name %}');
var assert = require('assert');

describe('{%= name %}', function() {

  before(function() {
    console.log('before all');
  });

  after(function() {
    console.log('after all');
  });

  beforeEach(function() {
    console.log('before each');
  });

  afterEach(function() {
    console.log('after each');
  });

  it('Should be awesome', function(done) {
    var app = new App();
    var result = app.execute();
    assert.equal(result, 'awesome');
    done();
  });

});
