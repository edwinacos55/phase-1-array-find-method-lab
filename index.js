// code your solution here

function superbowlWin (records) { 
    const result = (records.find(winning => winning.result=== "W"))
     return (result ? result.year : result)
// return records.find(winning => winning.result=== "W")
}

const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
superbowlWin(sadReality);
   