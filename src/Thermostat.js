function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.increase = function() {
  this.temperature += 1;
}

Thermostat.prototype.decrease = function() {
  if (this.temperature >= 11) {
    this.temperature -= 1;
  } else {
    throw new Error("Cannot go below 10 degrees");
  }
}
