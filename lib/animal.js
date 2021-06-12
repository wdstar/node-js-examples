/* eslint-disable require-jsdoc */
'use strict';

function Animal(name) {
  this._name = name;

  this.getName = () => this._name;

  this.sleep = () => {
    console.log('zzz...');
  };
}

function Bird(name) {
  // call super's constructor
  Animal.call(this, name);
  // add original properties.

  this.fly = () => {
    console.log('rustling...');
  };
}

// inherit Animal
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

class AnimalCls {
  constructor(name) {
    this._name = name;
  }

  getName() {
    return this._name;
  }

  sleep() {
    console.log('zzz...');
  }
}

class Cat extends AnimalCls {
  constructor(name) {
    super(name);
    // add original properties.
  }

  play() {
    console.log('gorogoro');
  }
}

module.exports = {
  Animal,
  Bird,
  AnimalCls,
  Cat,
};
