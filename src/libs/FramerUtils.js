export const createTubelightMatrix = (resistance = 800) => {
  const tubelightArray = [
    [0, 200],
    [1, 1],
  ];
  let i = 0;
  while (i <= 2000) {
    // OFF
    tubelightArray[0].push(i);
    tubelightArray[1].push(0);
    i += resistance;
    tubelightArray[0].push(i);
    tubelightArray[1].push(0);

    // ON
    i += 10;
    tubelightArray[0].push(i);
    tubelightArray[1].push(1);
    i += 100;
    tubelightArray[0].push(i);
    tubelightArray[1].push(1);

    // OFF
    i += 10;

    // reduce resistance
    resistance /= 2;
  }
  return tubelightArray;
};
