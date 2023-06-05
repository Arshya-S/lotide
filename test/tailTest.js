const assert = require('chai').assert;
const tail = require('../tail');



describe('#tail', () => {
  it('returns the end two values of ["Hello", "Lighthouse", "Labs"]', () => {
    const result = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(result), ["Lighthouse", "Labs"]);
  });

  it("returns the end of ['1', '2', 'hello', 'hi'] ", () => {
    const words = ['1', '2', 'hello', 'hi'];
    assert.deepEqual(tail(words), ['2', 'hello', 'hi']);
  });
});





