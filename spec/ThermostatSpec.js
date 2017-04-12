describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("initializes with a default temperature of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  describe('increase', function(){
    it('raises the temperature', function(){
      thermostat.increase();
      expect(thermostat.temperature).toBeGreaterThan(20);
    });
  });

  describe('decrease', function(){
    it('lowers the temperature', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toBeLessThan(20)
    });
  });
});
