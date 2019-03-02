import Input from '../../../../components/shared/inputs';
import DropDownWithLabel from '../../../../components/shared/inputs/DropDownWithLabel';
import InputWithLabel from '../../../../components/shared/inputs/InputWithLabel';
import SubmitInput from '../../../../components/shared/inputs/SubmitInput';

describe('Given all the Inputs', () => {
  it('should export all the input components', () => {
    expect(Input.withLabel).toEqual(InputWithLabel);
    expect(Input.dropDownWithLabel).toEqual(DropDownWithLabel);
    expect(Input.submitButton).toEqual(SubmitInput);
  });
});
