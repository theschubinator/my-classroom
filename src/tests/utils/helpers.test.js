import * as Helpers from '../../utils/helpers';
import Chance from 'chance';

const chance = new Chance();

const string1 = chance.string();
const string2 = chance.string();
const string3 = chance.string();
const string4 = chance.string();

describe('The Helper Functions', () => {
  describe('GetSpecificItems()', () => {
    it('should return an array of specific items from an object', () => {
      const mockArray = [
        { key1: string3, key2: string1 },
        { key1: string3, key2: string2 },
        { key1: string3, key2: string2 },
        { key1: string3, key2: string2 },
        { key1: string3, key2: string2 }
      ];

      const expectedResult1 = [string3];
      const expectedResult2 = [string1, string2];

      expect(Helpers.getSpecificItems(mockArray, 'key1')).toEqual(
        expectedResult1
      );
      expect(Helpers.getSpecificItems(mockArray, 'key2')).toEqual(
        expectedResult2
      );
    });

    it('should return an array of specific items that are nested 2 or more levels deep', () => {
      const mockArray = [
        { key1: string3, key2: { key3: string1, key4: string4 } },
        { key1: string3, key2: { key3: string1, key4: string4 } },
        { key1: string3, key2: { key3: string1, key4: string3 } },
        { key1: string3, key2: { key3: string2, key4: string4 } },
        { key1: string3, key2: { key3: string1, key4: string2 } }
      ];

      const expectedResult1 = [string1, string2];
      const expectedResult2 = [string4, string3, string2];

      expect(Helpers.getSpecificItems(mockArray, ['key2', 'key3'])).toEqual(
        expectedResult1
      );
      expect(Helpers.getSpecificItems(mockArray, ['key2', 'key4'])).toEqual(
        expectedResult2
      );
    });
  });

  describe('createObjectsFromArray()', () => {
    it('should create an array of objects from a string of arrays', () => {
      const mockArray = [string1, string2, string3, string4];
      const mockKey = chance.string();

      const expectedResult = [
        { [mockKey]: string1 },
        { [mockKey]: string2 },
        { [mockKey]: string3 },
        { [mockKey]: string4 }
      ];

      expect(
        Helpers.createObjectArrayFromStringArray(mockArray, mockKey)
      ).toEqual(expectedResult);
    });
  });
});
