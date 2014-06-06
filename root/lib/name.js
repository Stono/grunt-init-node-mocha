/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

var App = function() {
  var execute = function() {
    return 'awesome';
  };
 
  return Object.freeze({
    execute: execute
  });
};

module.exports = App;
