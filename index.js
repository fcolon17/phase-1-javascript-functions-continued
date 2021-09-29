function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function (work = "go to the office") {
  return `This Monday, I will ${work}.`;
};
function wrapAdjective(_initialized = "*") {
  return function (string) {
    return `You are ${_initialized}${string}${_initialized}!`;
  };
  //let result = wrapAdjective("||")
  //let emphatic = result("a dedicated programmer")
  // expect(emphatic).to.equal("You are ||a dedicated programmer||!")
}
