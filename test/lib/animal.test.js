'use strict';

const assert = require('chai').assert;
const Animal = require('../../lib/animal').Animal;
const Bird = require('../../lib/animal').Bird;
const Cat = require('../../lib/animal').Cat;

describe('Animals', () => {
  it('creates a Animal instance.', () => {
    const animal = new Animal('something');
    console.log(animal);
    // => Animal { _name: 'something', getName: [Function], sleep: [Function] }
    assert.equal(animal._name, 'something');
    assert.equal(animal.getName(), 'something');
    animal.sleep();

    const bird = new Bird('sparrow');
    console.log(bird);
    /* =>
    Bird {
      _name: 'sparrow',
      getName: [Function],
      sleep: [Function],
      fly: [Function] }
    */
    assert.equal(bird._name, 'sparrow');
    assert.equal(bird.getName(), 'sparrow');
    bird.sleep();
    bird.fly();

    const cat = new Cat('mike');
    console.log(cat);
    // => Cat { _name: 'mike' }
    assert.equal(cat._name, 'mike');
    assert.equal(cat.getName(), 'mike');
    cat.sleep();
    cat.play();
  });
});
