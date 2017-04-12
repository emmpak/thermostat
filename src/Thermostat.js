function Thermostat(){
  this.temperature = 20;
  this.saveMode = true;
}

Thermostat.prototype.increase = function() {
  if(this.temperature <= 24 && this.saveMode == true){
    this.temperature += 1;
  } else if(this.temperature <= 31 && this.saveMode == false) {
    this.temperature +=1;
  } else {
    throw new Error("Max temperature reached on the current mode")
  }
}

Thermostat.prototype.decrease = function() {
  if (this.temperature >= 11) {
    this.temperature -= 1;
  } else {
    throw new Error("Cannot go below 10 degrees");
  }
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}
