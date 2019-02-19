// ​Aequilibrium​ ​|​ ​The​ ​Castle​ ​Company   Aequilibrium​ ​is​ ​in​ ​the​ ​business​ ​of​ ​building​ ​
// castles​ ​(we​ ​really​ ​aren’t,​ ​but​ ​let’s​ ​pretend).​ ​Now,​ ​we​ ​also  believe​ ​in​ ​quality​ ​aesthetics,​
// ​so​ ​we​ ​only​ ​want​ ​to​ ​build​ ​castles​ ​in​ ​two​ ​types​ ​of​ ​places:  
// a.​ ​Peaks  b.​ ​Valleys  

// Let’s​ ​say​ ​you​ ​have​ ​an​ ​array​ ​of​ ​integers​ ​that​ ​describes​ ​a​ ​stretch​ ​of​ ​land,​ 
// ​where​ ​each​ ​integer​ ​represents​ ​the  current​ ​height​ ​of​ ​the​ ​land.​

//  Write​ ​a​ ​function​ ​that​ ​reads​ ​that​ ​array​ ​and​ ​returns​ ​the​ ​number​ ​of  
//  castles​ ​that​ ​Aequilibrium​ ​should​ ​build​ ​on​ ​that​ ​stretch​ ​of​ ​land?​ ​​ ​
//  You​ ​can​ ​write​ ​this​ ​solution​ ​in​ ​whatever  language​ ​you​ ​like​ ​and​ ​provide​ ​a​ ​way​ ​to​ ​test​ ​it.  
//  You​ ​can​ ​make​ ​the​ ​following​ ​assumptions:  
 
//  ● You​ ​can​ ​always​ ​build​ ​a​ ​castle​ ​at​ ​the​ ​start​ ​of​ ​the​ ​array,​ ​provided​ ​it​ ​is​ ​non-empty  
//  ● We​ ​only​ ​want​ ​to​ ​build​ ​one​ ​castle​ ​per​ ​peak​ ​or​ ​valley.  
//  ● A​ ​peak​ ​is​ ​an​ ​integer​ ​or​ ​series​ ​of​ ​integers​ ​that​ ​is​ ​above​ ​the​ ​immediately​ ​preceding​ ​and​ ​following  ints.​ ​​
//      ​For​ ​example,​ ​in​ ​the​ ​sequence​ ​[2,6,6,6,3]​ ​the​ ​sequence​ ​of​ ​3​ ​6s​ ​is​ ​a​ ​peak. 
//  ● A​ ​valley​ ​is​ ​an​ ​integer​ ​or​ ​series​ ​of​ ​integers​ ​that​ ​is​ ​below​ ​the​ ​immediately​ ​preceding​ ​and  following​ ​ints.​ ​​
//  ​    For​ ​example,​ ​in​ ​the​ ​sequence​ ​[6,1,4]​ ​the​ ​"1"​ ​would​ ​be​ ​a​ ​valley.  


// SOLUTION :
export function getPeaksAndValleys(areaArray) {

  var index = 0;
  var last = areaArray.length-1;
  var previousValue , currentValue , nextValue;
  var peaksAndValleys = [];

  // check for empty array
  if(areaArray.length === 0){
    return [];
  }

  while(index < last) {
    var prevIndex = index - 1;
    if(prevIndex < 0){
      // Mark the start of array
      peaksAndValleys[index] = 'start';
      index++;
      continue;
    }

    while ((index < last) && (areaArray[index] === areaArray[index +1])) {
      // incrementing  the index till there is a change in value.
      index++;
    }

    if (index >= last) {
      // checking if the value is the last value in the array
      peaksAndValleys[index] = 'End';
      break;
    }

    // Assign the values of previous, current and last index
    previousValue = areaArray[prevIndex];
    currentValue = areaArray[index];
    nextValue = areaArray[index + 1];

    if (previousValue != areaArray[prevIndex]){
      previousValue = areaArray[prevIndex];
    }

    if ((currentValue > previousValue) && (currentValue > nextValue)) {
      // peak
      peaksAndValleys[index] = 'Peak';
      index++;
      continue;
    }

    if ((currentValue < previousValue) && (currentValue < nextValue)) {
      // valley
      peaksAndValleys[index] = 'Valley';
      index++;
      continue;
    }    
    index++;
  }

  return peaksAndValleys;
}
