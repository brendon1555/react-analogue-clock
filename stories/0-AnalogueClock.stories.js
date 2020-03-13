import React from 'react';
import AnalogueClock from '../src/AnalogueClock';
import { withKnobs, boolean, number, object, color } from '@storybook/addon-knobs';

export default {
  title: 'AnalogueClock',
  component: AnalogueClock,
  decorators: [withKnobs],
};

export const DefaultAnalogueClock = () => <AnalogueClock />;
export const CustomAnalogueClock = () => (
  <AnalogueClock
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

DefaultAnalogueClock.story = {
  name: 'Default',
};
CustomAnalogueClock.story = {
  name: 'Custom',
};
