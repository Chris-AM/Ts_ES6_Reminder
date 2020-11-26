interface Xmen {
  name: string;
  age: number;
}

const SEND_TO_MISSION = (xmen: Xmen) => {
  console.log(`Sending ${xmen.name} to the mission`);
}

const BACK_TO_HOOTCH = (xmen: Xmen) => {
  console.log(`calling back ${xmen.name}`)
}

const WOLVERINE: Xmen = {
  name: 'logan',
  age: 60
}

SEND_TO_MISSION(WOLVERINE);
BACK_TO_HOOTCH(WOLVERINE)