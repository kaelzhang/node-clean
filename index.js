'use strict';

module.exports = clean;
clean.Clean = Clean;

var skema = require('skema');


function clean (rules) {
  return new Clean(rules);
}


function Clean (rules) {
  this.rules = rules;
  this._host = {};
  this._context = {};
  this._rule_parsed = {};
  this._proto = this._create_proto();
}


// Adds a new property
Clean.prototype.add = function(name, properties) {
  // body...
};


Clean.prototype.context = function(context) {
  this._context = context;
};


// Host the value to an object
Clean.prototype.host = function(subject) {
  this._host = subject;
  return this;
};


// Defines custom types
Clean.prototype.defineType = function(type, rule) {
  
};


Clean.prototype._create_proto = function() {

};


// Validate values
Clean.prototype.validate = function(value, callback) {
  // body...
};


Clean.prototype.get = function() {
  // body...
};


Clean.prototype._get_all = function(callback) {
  // body...
};


Clean.prototype._get_one = function(name, callback) {
  // body...
};


Clean.prototype._get_many = function(names, callback) {
  // body...
};


Clean.prototype.set = function(obj, callback) {
  // body...
};
