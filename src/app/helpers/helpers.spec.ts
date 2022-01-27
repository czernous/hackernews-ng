import { getRandomItems } from './data-helpers';

describe('getRandomItems', () => {
  it('should take an array as argument and return shuffled of specified length', () => {
    const mockArray = [1, 2, 3, 4, 5];
    const shuffeledArray = getRandomItems(mockArray, 3);
    expect(getRandomItems).toBeDefined();
    expect(shuffeledArray.length).toEqual(3);
  });
});
