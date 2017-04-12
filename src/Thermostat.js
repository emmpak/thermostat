function Thermostat(){
  this.temperature = 20;
  this.saveMode = true;
}

Thermostat.prototype.increase = function() {
  if(this.temperature <= 24){
      this.temperature += 1;
  } else {
    throw new Error("Save mode is on. Cannot go above 25 degrees.")
  }
}

Thermostat.prototype.decrease = function() {
  if (this.temperature >= 11) {
    this.temperature -= 1;
  } else {
    throw new Error("Cannot go below 10 degrees");
  }
}
