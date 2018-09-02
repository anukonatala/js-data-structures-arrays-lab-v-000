// Write your solution here!


const drivers =  ["Milo", "Otis", "Garfield"];
const newDrivers = drivers.slice();

function destructivelyAppendDriver(name){
  drivers.push(name);
}
function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}
function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function appendDriver(name){

  newDrivers.push(name);
}

function prependDriver(name){
  newDrivers.unshift(name);
}

function removeLastDriver(){
  newDrivers.pop();
}

function removeFirstDriver(){
  newDrivers.shift();
}


  