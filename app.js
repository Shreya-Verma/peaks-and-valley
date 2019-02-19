import { areaArray } from "./area";
import { getPeaksAndValleys } from "./peaksandvalleys";

var result = getPeaksAndValleys(areaArray);
if(result.length === 0){
    console.log('no land area');
}else{
    result.filter(function(value, index){
        console.log(`${index} ------> ${value}`);
    })
}

