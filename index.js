// code your solution here
// Function Declaration with default parameter
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function Expression with default parameter
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Function that returns a closure with visual flair
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }