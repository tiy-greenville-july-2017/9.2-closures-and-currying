/**
 * Object.create
 */

// var dog = {
//   color: 'red',
//   wag: function(){
//     console.log('wagging is awesome');
//   }
// };
//
// // Object.create()
// var objectCreate = function(o){
//   function F(){}
//   F.prototype = o;
//   return new F();
// };
//
// var kepler = Object.create(dog);
// var ozzy = Object.create(dog);
// ozzy.color = 'black';
// console.log(kepler.color);
// ozzy.wag();


/*
 * Constructor Configs
 */
function CuteAnimal (config) {
  config = config || {};

  var defaults = {
    color: 'brown',
    status: 'normal',
    hungry: true
  };

 //  $.extend(this, defaults, config);
  var settings = Object.assign({}, defaults, config);

  this.color = settings.color;
  this.status = settings.status;
  this.hungry = settings.hungry;
  this.wag = function(){

  };
}

/**
 * Closures
 */
function showName(firstName){

  function buildName(lastName){
    console.log(firstName, lastName);
  }

  return buildName;
}

var nameBuilder = showName('Dan');
nameBuilder('Dietz');


/**
 * Currying and Partial Applications
 */
// function add(num1, num2){
//   return num1 + num2;
// }

function add(num1){
  var title = 'Your answer is: ';

  function addSecondNumber(num2){
    return title + (num1 + num2);
  }

  return addSecondNumber;
}

var addNine = add(9);
console.log(addNine(10));
console.log(addNine(20));

var addTen = add(10);
console.log(addTen(10));
console.log(addTen(20));

var addFive = add(5);
console.log(addFive(5));
console.log(addFive(150));

console.log(add(3)(3));
