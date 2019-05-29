/* The for principles of "this";
* in your own words, explain the four principles for the "this" keyword below.
*
* 1. Implicit Binding points to the object on which the function is called or what's to the lect of the period when the function is called.
* 2. Explicit Binding tells the JavaScript engine to set "this" to point to a certain value using call, apply, or bind.
* 3. New Binding uses the "new" keyword, constructs a new object, and "this" points to it.
* 4. Window/Global Object Binding is when the value of "this" is in the window/console object.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayGhost(name) {
    console.log(this);
    return name;
  }
  sayGhost("Nearly Headless Nick");

// Principle 2

// code example for Implicit Binding
let myGhost = {
    name: 'Nearly Headless Nick',
    boo: 'Boo!!',
    ghost: function () {
      console.log(this.boo);
    }
  }
  
  myGhost.ghost();
// Principle 3

// code example for New Binding
function Ghost(name) {
    this.name = name;
  }
  
  let myGhost = new Ghost('Nearly headless? How can you be nearly headless?');
  
  console.log(myGhost.name); 

// Principle 4

 

function ghost() {
    console.log(this.boo);
  }
  
  let myGhost = {
    name: 'Nearly Headless Nick',
    boo: '👻 Boo!!',
  }
  
  ghost.call(myGhost);