'use strict';

const answer = require('./hiker');

const doorStates = require('./doorStates');

describe('answer', () => {
  it('should reflect the expected final state after three passes', () => {
    // retrieve the answer
    const finalState = answer();
    // verify the results
    finalState.forEach((status, idx) => {
      // array index is zero-based, door number needs to be one-based
      const doorNumber = idx + 1;
      // by default, expect the door to be open (either only the first pass touched the door, or all passes did)
      let expected = doorStates.OPEN;
      // if only one of the second and third passes touched the door (but not both) it should be closed
      if ((doorNumber % 2 === 0 && doorNumber % 3 !== 0) || (doorNumber % 3 === 0 && doorNumber % 2 !== 0)) {
          expected = doorStates.CLOSED;
      }
      // and did we get that?
      expect(status).toEqual(expected);
    });
  });
});
