/* eslint-disable require-jsdoc */
'use strict';

// old style constructor
function PersonCtor(name) {
  // Encapsulated.
  let _name = name;

  this.getName = () => _name;

  this.setName = (name) => {
    _name = name;
  };
}

function PersonProt(name) {
  // this property is NOT encapsulated!!
  this._name = name;
}

PersonProt.prototype.getName = function() {
  return this._name;
};

PersonProt.prototype.setName = function(name) {
  this._name = name;
};

class PersonCls {
  constructor(name) {
    // this property is NOT encapsulated!!
    this._name = name;
  }

  // Property and its accessors can NOT be the same name.
  get getName() {
    return this._name;
  }

  set setName(name) {
    this._name = name;
  }
}

module.exports = {
  PersonCtor,
  PersonProt,
  PersonCls,
};
