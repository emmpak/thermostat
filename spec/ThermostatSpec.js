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

  it("initializes with medium usage", function() {
    expect(thermostat.usage).toEqual('Medium usage');
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

    it('sets the usage', function() {
      spyOn(thermostat, "setUsage");
      thermostat.increase();
      expect(thermostat.setUsage).toHaveBeenCalled(); // expect the function to be called; do not invoke the function with ()
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

    it('sets the usage', function() {
      spyOn(thermostat, "setUsage");
      thermostat.decrease();
      expect(thermostat.setUsage).toHaveBeenCalled();
    });
  });


  describe('reset', function(){
    it('brings the temperature to 20 degrees', function(){
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('setUsage', function() {
    it('returns low usage if temperature is below 18', function() {
      thermostat.temperature = 17;
      thermostat.setUsage();
      expect(thermostat.usage).toEqual('Low usage');
    });

    it('returns medium usage', function() {
      thermostat.temperature = 25;
      thermostat.setUsage();
      expect(thermostat.usage).toEqual('High usage');
      thermostat.temperature = 23;
      thermostat.setUsage();
      expect(thermostat.usage).toEqual('Medium usage');
    });

    it('returns high usage', function() {
      thermostat.temperature = 25;
      thermostat.setUsage();
      expect(thermostat.usage).toEqual('High usage');
    });
  });
});
