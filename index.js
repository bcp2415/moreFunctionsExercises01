function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevelDoubleCheck = function(fuelLevel) {
  if (fuelLevel > 10000) {
    return (fuelLevel - 10001);
  } else if (fuelLevel > 5000) {
    return (fuelLevel - 5001);
  } else {
    return fuelLevel;
  };
};

let anotherInnocentVariable = function(arr) {
  let loot = [];
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] === 'gold') {
      loot.push(arr[i]);
      arr.splice(i, 1, 'dirty socks');
    };
    if (arr[i] === 'AE-35 unit') {
      loot.push(arr[i]);
      arr.splice(i, 1, 'moldy cheese')
    };
  };
  return loot;
};

function irs(levelOfFuel, itemsInCargoHold) {
  const stolenFuel = fuelLevelDoubleCheck(fuelLevel);
  const stolenItems = anotherInnocentVariable(cargoHold);

  const receipt = `Raided ${stolenFuel} kg of fuel from the tanks, and stole ${stolenItems[0]} and ${stolenItems[1]} from the cargo hold.`;
  return receipt;
}



let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log(fuelLevelDoubleCheck(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

irs(fuelLevel, cargoHold);