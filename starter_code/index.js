const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();

intervalId = elevator.start();
let person = new Person("Asier", 0, 5);

elevator.start();
elevator.call(person);
