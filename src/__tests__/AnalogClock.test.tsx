import { shallow } from 'enzyme';
import React from 'react';
import AnalogClock from '../AnalogClock';

describe('Test Component', () => {
  let props: any;

  beforeEach(() => {
    props = {
      baseColor: '#948c8c',
      borderColor: '#0de7c6',
      borderWidth: 0,
      centerColor: '#221543',
      handColors: {
        hour: '#8f71fe',
        minute: '#f46700',
        second: '#044112',
      },
      notchColor: '#376101',
      numbersColor: '#000000',
      showNumbers: true,
      size: 300,
    };
  });

  const renderWrapper = () => shallow(<AnalogClock {...props} />);

  describe('Snapshots', () => {
    it('should match snapshots as default', () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it('should match snapshots as custom base color', () => {
      props.baseColor = '#0de7c6';
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
