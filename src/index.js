module.exports = function check(str, bracketsConfig) {
  let openBrackets=[];
  let brackets = {};
  let stuck = [];
  let flag = false;

  for (let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]);
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }
}
