'use strict';

const doorStates = require('./doorStates');

const visitEveryDoor = (doors) => doors.map((isClosed) => !isClosed);

const visitEveryNDoor = (doors, increment) => doors.map((isClosed, idx) => { 
  // array index is zero-based, door number needs to be one-based
  const doorNumber = idx + 1;
  // should we toggle this door (based on the increment provided)?
  return doorNumber % increment === 0 ? !isClosed : isClosed;
});

const answer = () => {
  // 100 doors in a row are all initially closed. 
  let myDoors = Array(100).fill().map((_, i) => true);
  // The first time through, you visit every door and toggle the door (if the door is closed, you open it; if it is open, you close it).
  myDoors = visitEveryDoor(myDoors);
  // The second time you only visit every 2nd door (door #2, #4, #6, ...).
  myDoors = visitEveryNDoor(myDoors, 2);
  // The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.
  myDoors = visitEveryNDoor(myDoors, 3);  
  // return the final status
  return myDoors.map((isClosed) => isClosed ? doorStates.CLOSED : doorStates.OPEN);
};

module.exports = answer;
