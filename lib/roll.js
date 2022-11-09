export const roll = (sides, num_dice, num_rolled) => {
  let res = {
    sides: sides,
    dice: num_dice,
    rolls: num_rolled,
    results: [],
  };
  for (let i = 0; i < num_rolled; i++) {
    let tmp_res = 0;
    for (let j = 0; j < num_dice; j++) {
      tmp_res += rand_roll(sides);
    }
    res['results'].push(tmp_res);
  }
  return res;
};

const rand_roll = (sides) => {
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  return randomNumber;
};
