//Answer No-01--------

function feetToMile (feet) {
    let mile=feet/5280;                                          // 1 mile = 5280 feet
    if (feet<=0){
        console.log ("Input cannot be zero or less than zero"); //if someone input 0 or negetive velue
    }
   
    else {
        return mile;
    }
  
}

let result = feetToMile();
console.log(result, "Mile");

//Answer No-02--------

function woodCalculator (chairs, tables, beds){     /** 1 cubic feet wood per chair, 3 cubic feet wood per table and 5 cubic wood per bed*/
    let tableCount = tables * 3; 
    let bedCount = beds * 5; 
    let total = chairs + tableCount + bedCount;

    return total;

}

let totalwood = woodCalculator();
console.log ("You Need:",totalwood, "Cubic feet woods");

//Answer No-03--------

function brickCalculator (totalFloor){
    if (totalFloor <=10){
        console.log (totalFloor*15000);       // 1 to 10th floor is 15 feet long each floor, need 1000 bricks per feet
    }
    else if (totalFloor >10 && totalFloor <21) {
        console.log ((totalFloor-10)*12000+150000); //  11 to 20th floor is  12 feet long each floor, need 1000 bricks per feet

    }
    else if (totalFloor >20){
        console.log ((totalFloor-20)*10000+270000); //  from 21 to upper every floor is 10 feet long , need 1000 bricks per feet 
    }
    return totalFloor;
}

console.log(brickCalculator());

//Answer No-04--------


    
function tinyFriend (names){
 var smallest = names [0];
    for (var i=0; i<names.length; i++){
        var name = names [i];
        if (name.length<names.length){
            smallest=name;
        } 
    }
    return smallest;
}

console.log(tinyFriend(['ritu','alami','kolmiful']));