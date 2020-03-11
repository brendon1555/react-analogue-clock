import React from 'react';
import AnalogClock from '../src/AnalogClock';
import { withKnobs, boolean, number, object, color } from '@storybook/addon-knobs';

export default {
  title: 'AnalogClock',
  component: AnalogClock,
  decorators: [withKnobs],
};

export const DefaultAnalogClock = () => <AnalogClock />;
export const CustomAnalogClock = () => (
  <AnalogClock
    baseColor={color('baseColor', '#948c8c')}
    borderColor={color('borderColor', '#0de7c6')}
    borderWidth={number('borderWidth', 0)}
    centerColor={color('centerColor', '#221543')}
    handColors={{
      hour: color('handColors.hour', '#8f71fe'),
      minute: color('handColors.minute', '#f46700'),
      second: color('handColors.second', '#044112'),
    }}
    notchColor={color('notchColor', '#376101')}
    showNumbers={boolean('showNumbers', true)}
    numbersColor={color('numbersColor', '#000000')}
    size={number('size', 300)}
  />
);

DefaultAnalogClock.story = {
  name: 'Default',
};
CustomAnalogClock.story = {
  name: 'Custom',
};
