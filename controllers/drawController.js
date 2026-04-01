export const runDraw = (req, res) => {

  let drawNumbers = [];

  while (drawNumbers.length < 5) {
    let num = Math.floor(Math.random() * 45) + 1;
    if (!drawNumbers.includes(num)) {
      drawNumbers.push(num);
    }
  }

  res.json({ drawNumbers });
};
