import Buttons from '../../../../components/shared/buttons';
import NormalButton from '../../../../components/shared/buttons/button';
import SmallButton from '../../../../components/shared/buttons/smallButton';
import LargeButton from '../../../../components/shared/buttons/largeButton';
import XLargeButton from '../../../../components/shared/buttons/xLargeButton';

describe('Given all the Buttons', () => {
  it('should export all the Button components', () => {
    expect(Buttons.normal).toEqual(NormalButton);
    expect(Buttons.small).toEqual(SmallButton);
    expect(Buttons.large).toEqual(LargeButton);
    expect(Buttons.xl).toEqual(XLargeButton);
  });
});
