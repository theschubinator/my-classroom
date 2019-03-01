import Chance from 'chance';

import {
  dropDownTypes,
  dropDownMap,
  getDropDownOptions
} from '../../../../../components/shared/drop-down/DropDownWithLabel/dropDownMap';

const chance = new Chance();

describe('Given DropDownMap', () => {
  describe('and the DropDownTypes', () => {
    it('should contain a type for setting drop down options', () => {
      expect(dropDownTypes.EXAM_SUBJECT).toBe('EXAM_SUBJECT');
    });
  });

  describe('and the getDropDownOptions', () => {
    const currentDropDownOption = chance.pickone(Object.keys(dropDownMap));

    describe('and there are no dropDown map matches', () => {
      it('should create a custom dropDown type from passed in values', () => {
        const mockDropDown = {
          title: chance.string(),
          options: [{ value: chance.string() }]
        };

        expect(
          getDropDownOptions(null, mockDropDown.options, mockDropDown.title)
        ).toEqual(mockDropDown);
      });
    });

    describe('and there is a dropDown map match', () => {
      it('should return the correct dropDown with the default options', () => {
        const expectedOptions = dropDownMap[currentDropDownOption];
        expect(getDropDownOptions(currentDropDownOption)).toEqual(
          expectedOptions
        );
      });

      it('should return the correct dropDown with the custom passed in options', () => {
        const mockOptions = [{ value: chance.string() }];
        dropDownMap[currentDropDownOption].options = mockOptions;
        const expectedOptions = dropDownMap[currentDropDownOption];

        expect(getDropDownOptions(currentDropDownOption, mockOptions)).toEqual(
          expectedOptions
        );
      });

      it('should return the correct dropDown with the custom passed in title', () => {
        const mockTitle = chance.string();
        dropDownMap[currentDropDownOption].title = mockTitle;
        const expectedOptions = dropDownMap[currentDropDownOption];

        expect(
          getDropDownOptions(currentDropDownOption, null, mockTitle)
        ).toEqual(expectedOptions);
      });
    });
  });
});
