const makeArmy = require('./01-army');

describe('Army', () => {
  it('should be defined', () => {
    expect(makeArmy).toBeDefined();
  });

  it('should be typeof function', () => {
    expect(typeof makeArmy).toBe('function');
  });

  it('should return an array', () => {
    expect(Array.isArray(makeArmy())).toBe(true);
  });

  it('first solder should has first position', () => {
    expect(makeArmy()[1]()).toBe('my number is 1');
  });

  it('third solder should has third position', () => {
    expect(makeArmy()[3]()).toBe('my number is 3');
  });
});
