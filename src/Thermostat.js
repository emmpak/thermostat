function Thermostat(){
  this.temperature = 20;
  this.saveMode = 'On';
  this.usage = 'Medium usage'
}

Thermostat.prototype.getTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.increase = function() {
  if(this.temperature <= 24 && this.saveMode == 'On'){
    this.temperature += 1;
  } else if(this.temperature <= 31 && this.saveMode == 'Off') {
    this.temperature +=1;
  } else {
    throw new Error("Max temperature reached on the current mode");
  }
  this.setUsage();
}

Thermostat.prototype.decrease = function() {
  if (this.temperature >= 11) {
    this.temperature -= 1;
  } else {
    throw new Error("Cannot go below 10 degrees");
  }
  this.setUsage();
}

Thermostat.prototype.reset = function() {
  this.temperature = 20;
}

Thermostat.prototype.setUsage = function() {
  if (this.temperature < 18) {
    this.usage = 'Low usage';
  } else if(this.temperature >= 25) {
    this.usage = 'High usage';
  }
  else {
    this.usage = 'Medium usage';
  }
}

Thermostat.prototype.changeMode = function() {
  if (this.saveMode === 'On') {
    this.saveMode = 'Off';
  } else {
    this.saveMode = 'On';
  }
}
