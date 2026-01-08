const debugging = (label, value) => {
  console.log("----- DEBUG START -----");
  console.log("Label:", label);
  console.log("Value:", value);
  console.log("Type:", typeof value);
  console.log("----- DEBUG END -------");
};

module.exports = debugging;
