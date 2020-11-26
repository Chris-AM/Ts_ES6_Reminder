"use strict";
const SEND_TO_MISSION = (xmen) => {
    console.log(`Sending ${xmen.name} to the mission`);
};
const BACK_TO_HOOTCH = (xmen) => {
    console.log(`calling back ${xmen.name}`);
};
const WOLVERINE = {
    name: 'logan',
    age: 60
};
SEND_TO_MISSION(WOLVERINE);
BACK_TO_HOOTCH(WOLVERINE);
