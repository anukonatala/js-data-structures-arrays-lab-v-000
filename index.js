// Write your solution here!


const drivers =  ["Milo", "Otis", "Garfield"];
// const newDrivers = drivers.slice();

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
  let newDrivers = drivers.slice();
  newDrivers.push(name);
}

function prependDriver(name){
  let newDrivers = drivers.slice();
  newDrivers.unshift(name);
}

function removeLastDriver(){
  let newDrivers = drivers.slice();
  newDrivers.pop();
}

function removeFirstDriver(){
  let newDrivers = drivers.slice();
  newDrivers.shift();
}


  