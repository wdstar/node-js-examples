'use strict';

const assert = require('chai').assert;
const PersonCtor = require('../../lib/person').PersonCtor;
const PersonProt = require('../../lib/person').PersonProt;
const PersonCls = require('../../lib/person').PersonCls;

describe('PersonCtor classe, old style class, but better as OOP', () => {
  it('creates a PersonCtor instance.', () => {
    const alice = new PersonCtor('Alice');
    console.log(alice);
    // => PersonCtor { getName: [Function], setName: [Function] }
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
  });
});

describe('PersonProt classe, old stlyle prototype base class', () => {
  it('creates a PersonProt instance.', () => {
    const bob = new PersonProt('Bob');
    console.log(bob);
    // => PersonProt { _name: 'Bob' }
    // `_name` property is NOT encapsulated!!
    assert.equal(
        Object.getOwnPropertyDescriptor(bob, '_name').value, 'Bob');
    assert.equal(bob._name, 'Bob');
    assert.equal(bob.getName(), 'Bob');
    // AssertionError: expected [Function] to equal 'Bob'
    // assert.equal(bob.getName, 'Bob');
    assert.isUndefined(Object.getOwnPropertyDescriptor(bob, 'getName'));
    assert.isUndefined(Object.getOwnPropertyDescriptor(bob, 'setName'));
  });
});

describe('PersonCls ES2015 classe', () => {
  it('creates a PersonCls instance.', () => {
    const carol = new PersonCls('Carol');
    console.log(carol);
    // => PersonCls { _name: 'Carol' }
    // `_name` property is NOT encapsulated!!
    assert.equal(
        Object.getOwnPropertyDescriptor(carol, '_name').value, 'Carol');
    assert.equal(carol._name, 'Carol');
    // We should delete get/set from the accessor name.
    assert.equal(carol.getName, 'Carol');
    // TypeError: carol.getName is not a function
    // assert.equal(carol.getName(), 'Carol');
    // each accessor is NOT an accessor property
    assert.isUndefined(Object.getOwnPropertyDescriptor(carol, 'getName'));
    assert.isUndefined(Object.getOwnPropertyDescriptor(carol, 'setName'));
  });
});
