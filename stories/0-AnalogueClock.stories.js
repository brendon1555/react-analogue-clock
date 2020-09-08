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
export const FiveAnalogueClocks = () => (
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <AnalogueClock
      baseColor="#CEEC97"
      borderColor="#F4B393"
      borderWidth={5}
      centerColor="#FC60A8"
      handColors={{
        hour: '#494368',
        minute: '#494368',
        second: '#494368',
      }}
      notchColor="#7A28CB"
      numbersColor="#494368"
      showNumbers={true}
      size={250}
    />
    <AnalogueClock
      baseColor="#DB2B39"
      borderColor="#29335C"
      borderWidth={5}
      centerColor="#6B2034"
      handColors={{
        hour: '#000000',
        minute: '#000000',
        second: '#000000',
      }}
      notchColor="#F3A712"
      numbersColor="#F0CEA0"
      showNumbers={false}
      size={250}
    />
    <AnalogueClock
      baseColor="#2DBCE9"
      borderColor="#9ACA3D"
      borderWidth={5}
      centerColor="#000022"
      handColors={{
        hour: '#000000',
        minute: '#000000',
        second: '#000000',
      }}
      notchColor="#001242"
      numbersColor="#005E7C"
      showNumbers={true}
      size={250}
    />
    <AnalogueClock
      baseColor="#3E000C"
      borderColor="#FB4B4E"
      borderWidth={0}
      centerColor="#7C0B2B"
      handColors={{
        hour: '#ffffff',
        minute: '#ffffff',
        second: '#ffffff',
      }}
      notchColor="#D10000"
      numbersColor="#FFCBDD"
      showNumbers={true}
      size={250}
    />
    <AnalogueClock
      baseColor="#587B7F"
      borderColor="#1E2019"
      borderWidth={10}
      centerColor="#394032"
      handColors={{
        hour: '#000000',
        minute: '#000000',
        second: '#000000',
      }}
      notchColor="#8DAB7F"
      numbersColor="#CFEE9E"
      showNumbers={true}
      size={250}
    />
  </div>
);

DefaultAnalogueClock.story = {
  name: 'Default',
};
CustomAnalogueClock.story = {
  name: 'Custom',
};
