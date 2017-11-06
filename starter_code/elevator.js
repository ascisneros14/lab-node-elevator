class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = "up";
    this.interval;
  }

  start(person) {
    this.interval = setInterval(() => this.update(person), 1000);
  }
  stop() {
        clearInterval(this.interval);
      }
  update() {
    this.log();
}
  _passengersEnter(person) {
    if(!this.waitingList == 0){
      this.passengers.push(person);
      this.waitingList.pop(person);
      this.requests.push(person.destinationFloor);
      console.log(`${person.name} has enter the elevator`);
    }
  }
  _passengersLeave(person) {
    if(this.floor == this.destinationFloor){
      this.passengers.pop(person);
      console.log(`${person.name} has leave the elevator`);
    }
  }
  floorUp() {
    if(this.floor < this.MAXFLOOR){
        this.floor += 1;
    }else{
      console.log("You are in the maximum floor");
    }

  }
  floorDown() {
    if(this.floor > 0){
        this.floor -= 1;
    }else{
      console.log("You are in the minimum floor");
    }

  }
  call(person) {
      this.waitingList.push(person);
      this.requests.push(person.originFloor);
   }
  log() {
  console.log("direction " + this.direction + " floor " + this.floor);}
}

module.exports = Elevator;
