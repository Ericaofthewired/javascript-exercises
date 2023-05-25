const removeFromArray = function (array, ...args) {
    const fixedArray = [];
    array.forEach((item) => {
      if (!args.includes(item)) {
        fixedArray.push(item);
      }
    });
    return fixedArray;
  };
// Do not edit below this line
module.exports = removeFromArray;
