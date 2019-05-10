'use strict';

const assert = require('chai').assert;

describe('Regular expressions', () => {
  it('creates patterns.', () => {
    // regex literal
    let member = /^(alice|bob)$/;
    console.log(member);
    // => /^(alice|bob)$/
    assert.isTrue(member.test('alice'));
    assert.isFalse(member.test('carol'));

    // RegExp constructor allows regex object!
    member = new RegExp(member);
    console.log(member);
    // => /^(alice|bob)$/
    assert.isTrue(member.test('bob'));
    assert.isFalse(member.test('carol'));

    member = new RegExp('^(alice|bob)$');
    console.log(member);
    // => /^(alice|bob)$/
    assert.isTrue(member.test('bob'));
    assert.isFalse(member.test('carol'));
  });
});
