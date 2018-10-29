test('getDailyLevel', async function() {
  const getDailyLevel = require('../functions/getDailyLevel');

  describe('get the daily level', async function() {
    const daily = await getDailyLevel();

    it('should return the daily level object', function() {
      expect(daily).toContain(expect.objectContaining({
        daily: expect.any(Number),
        name: expect.any(String),
        creator: expect.any(String),
        diff: expect.any(String),
        featured: expect.any(Boolean),
        epic: expect.any(Boolean),
        timestamp: expect.any(Number),
      }));
    });
  });
});
