module.exports = function check(str, bracketsConfig) {
  let openBrackets=[];
  let brackets = {};
  let stuck = [];
  let flag = false;

  for (let i = 0; i < bracketsConfig.length; i++){
    openBrackets.push(bracketsConfig[i][0]);
    brackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  for(let i= 0; i < str.length; i++){
    if(openBrackets.includes(str[i])){
      if(str[i] === brackets[str[i]]){
        if(!flag){
          stuck.push(str[i]);
          flag= true;
          continue;
        }else if(flag && str[i] !== stuck[stuck.length - 1]){
          stuck.push(str[i]);
          continue;
        }else{
          if(brackets[str[i]]===stuck[stuck.length - 1]){
            stuck.pop();
            continue;
          }else{
            return false;
          }
        }
      }
      stuck.push(str[i]);
      continue;
    }else {


      if(stuck.length === 0){
        return false;
      }

      if(brackets[str[i]]===stuck[stuck.length - 1]){

        stuck.pop();
        continue;
      }else{
        return false;
      }
    }
  }
  return stuck.length === 0;
}
