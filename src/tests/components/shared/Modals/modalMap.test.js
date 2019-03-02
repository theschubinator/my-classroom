import Chance from 'chance';

import {
  getModalData,
  modalMap,
  modalTypes
} from '../../../../components/shared/modals/modalMap';

const chance = new Chance();

describe('Given ModalMap', () => {
  describe('and the ModalTypes', () => {
    it('should contain a type for creating an exam', () => {
      expect(modalTypes.CREATE_EXAM).toEqual('CREATE_EXAM');
    });
  });

  describe('and the getModalData function', () => {
    it('should return an empty object if there is no modalType match', () => {
      const expectedModal = { title: '', Component: null };
      expect(getModalData('')).toEqual(expectedModal);
    });

    it('should return the correct modal if there is a modalType match', () => {
      const modalType = chance.pickone(Object.keys(modalTypes));

      const expectedModal = modalMap[modalType];
      expect(getModalData(modalType)).toEqual(expectedModal);
    });
  });
});
