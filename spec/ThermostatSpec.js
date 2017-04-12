describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("initializes with a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("initializes with power saving mode on", function() {
    expect(thermostat.saveMode).toBe(true);
  });

  describe('increase', function(){
    it('raises the temperature', function(){
      thermostat.increase();
      expect(thermostat.temperature).toBeGreaterThan(20);
    });

    it('cannot increase temperature above 25 if save mode is on', function(){
      thermostat.temperature = 25;
      expect(function(){
        thermostat.increase()
      }).toThrowError("Max temperature reached on the current mode");
    });

    it('cannot increase temperature above 32 if save mode is off', function() {
      thermostat.saveMode = false;
      thermostat.temperature = 32;
      expect(function() {
        thermostat.increase()
      }).toThrowError("Max temperature reached on the current mode");
    });
  });

  describe('decrease', function(){
    it('lowers the temperature', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toBeLessThan(20);
    });
    it('cannot lower temperature below 10 degrees', function() {
      for(var i=0; i<10; i++) {
        thermostat.decrease();
      }
      expect(function(){
        thermostat.decrease();
      }).toThrowError("Cannot go below 10 degrees");
    });
  });

  describe('reset', function(){
    it('brings the temperature to 20 degrees', function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });
});
