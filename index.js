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

// describe('index.js', function () {
//   describe('drivers', function () {
//     it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
//       expect(drivers).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//     });

//     it('is declared with const', function () {
//       expect(function () { drivers = []; }).to.throw(TypeError);
//     });
//   });

  