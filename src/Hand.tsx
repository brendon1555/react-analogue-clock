import * as ExtraPropTypes from 'extra-prop-types';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import { IHandColors } from './AnalogueClock';
import Box from './Box';

interface IHandTypeProps {
  type: string;
  handColors: IHandColors;
  handAngle: number;
  secondStartAngle: number;
  showAnimation: boolean;
}

interface IHandTypeWithAngleProps {
  handColors: IHandColors;
  hours: number;
  minutes: number;
  seconds: number;
  type: string;
}

interface IFaceNumberProps {
  handColors: IHandColors;
  handAngle: number;
}

interface IHandAngleProps {
  type: string;
  seconds: number;
  minutes: number;
  hours: number;
}

const getHandAngle = ({ type, seconds, minutes, hours }: IHandAngleProps): number => {
  const handType = type;
  let handAngle = 0;
  switch (handType) {
    case 'second':
      handAngle = minutes * 360 + seconds * 6;
      break;
    case 'minute':
      handAngle = hours * 360 + minutes * 6;
      break;
    case 'hour':
      handAngle = hours * 30 + minutes / 2;
      break;
    default:
      handAngle = 360;
  }
  return handAngle;
};

const StyledHand = styled(Box)<IHandTypeProps>`
  width: 50%;
  right: 50%;
  height: 3px;
  position: absolute;
  top: 50%;
  transform-origin: 100% 50%;
  transition: ${(props) => (props.showAnimation ? 'transform 0.3s cubic-bezier(.4,2.08,.55,.44)' : 'none')};
  ${(props) =>
    props.type === 'second' &&
    css<IFaceNumberProps>`
      height: 1%;
      margin-top: -0.5%;
      transform-origin: 80% 50%;
      right: 40%;
      background: ${(innerProps) =>
        innerProps.handColors && innerProps.handColors.second ? innerProps.handColors.second : '#d81c7a'};
      width: 50%;
      z-index: 11;
    `}
  ${(props) =>
    props.type === 'minute' &&
    css<IFaceNumberProps>`
      background: ${(innerProps) =>
        innerProps.handColors && innerProps.handColors.minute ? innerProps.handColors.minute : '#d81c7a'};
      width: 40%;
      height: 2%;
      margin-top: -1%;
      z-index: 9;
    `}
  ${(props) =>
    props.type === 'hour' &&
    css<IFaceNumberProps>`
      background: ${(innerProps) =>
        innerProps.handColors && innerProps.handColors.hour ? innerProps.handColors.hour : '#d81c7a'};
      width: 20%;
      height: 2.5%;
      margin-top: -1.25%;
      z-index: 10;
    `}
`;

const Hand: React.FC<IHandTypeWithAngleProps> = ({ type, seconds, minutes, hours, handColors }) => {
  const [secondStartAngle] = useState(seconds * 6);

  const [showAnimation, setShowAnimation] = useState(false);
  const [handAngle, setHandAngle] = useState(getHandAngle({ type, seconds, minutes, hours }));

  useLayoutEffect(() => {
    setHandAngle(getHandAngle({ type, seconds, minutes, hours }));
    setShowAnimation(true);
  }, [type, seconds, minutes, hours]);

  return (
    <StyledHand
      style={{ transform: `rotate(${handAngle + 90}deg)` }}
      type={type}
      handAngle={handAngle}
      secondStartAngle={secondStartAngle}
      handColors={handColors}
      showAnimation={showAnimation}
    />
  );
};

Hand.propTypes = {
  handColors: PropTypes.shape({
    hour: ExtraPropTypes.color.isRequired,
    minute: ExtraPropTypes.color.isRequired,
    second: ExtraPropTypes.color.isRequired,
  }).isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Hand;
