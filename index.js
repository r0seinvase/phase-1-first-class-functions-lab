const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = function(array) {return array.slice(0,2)};
// this anonymous function returns lthe first two drivers by cutting of asset two, 
// and anything that comes after 
const returnLastTwoDrivers = function(array) {return array.slice(-2)};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fare) {
let multiplier = fare;
return function(fare) {
return multiplier*fare;
}
}
function fareDoubler(fare) {
    return fare*2;
}
function fareTripler(fare) {
    return fare*3;
}
function selectDifferentDrivers(array,select) {
    if (select === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array);
    } else if (select === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    }
}