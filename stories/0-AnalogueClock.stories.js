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
    baseColor={color('baseColor', '#ffffff')}
    borderColor={color('borderColor', '#000000')}
    borderWidth={number('borderWidth', 5)}
    centerColor={color('centerColor', '#000000')}
    handColors={{
      hour: color('handColors.hour', '#000000'),
      minute: color('handColors.minute', '#000000'),
      second: color('handColors.second', '#000000'),
    }}
    notchColor={color('notchColor', '#000000')}
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
