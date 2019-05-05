'use strict';

const assert = require('chai').assert;
const PersonProt = require('../../lib/person').PersonProt;
const PersonCls = require('../../lib/person').PersonCls;

describe('Person classes', () => {
  it('creates Person instances.', () => {
    // 1. Old style class: better as OOP
    const alice = new PersonProt('Alice');
    console.log(alice);
    // => PersonProt { getName: [Function], setName: [Function] }
    // Encapsulated.
    assert.isUndefined(Object.getOwnPropertyDescriptor(alice, '_name'));
    assert.isUndefined(alice._name);
    assert.equal(alice.getName(), 'Alice');
    // AssertionError: expected [Function] to equal 'Alice'
    // assert.equal(alice.getName, 'Alice');
    alice.setName('alice');
    assert.equal(alice.getName(), 'alice');
    // data property value is a function.
    assert.isFunction(Object.getOwnPropertyDescriptor(alice, 'getName').value);
    assert.isFunction(Object.getOwnPropertyDescriptor(alice, 'setName').value);

    // 2. ES2015 class
    const bob = new PersonCls('Bob');
    console.log(bob);
    // => PersonCls { _name: 'Bob' }
    // `name` property is NOT encapsulated!!
    assert.equal(Object.getOwnPropertyDescriptor(bob, '_name').value, 'Bob');
    assert.equal(bob._name, 'Bob');
    // We should delete get/set from the accessor name.
    assert.equal(bob.getName, 'Bob');
    // TypeError: bob.getName is not a function
    // assert.equal(bob.getName(), 'Bob');
    // each accessor is NOT an accessor property
    assert.isUndefined(Object.getOwnPropertyDescriptor(bob, 'getName'));
    assert.isUndefined(Object.getOwnPropertyDescriptor(bob, 'setName'));
  });
});
