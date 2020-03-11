import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { IHandColors } from './AnalogClock';
import Box from './Box';

interface IHandTypeProps {
  type: string;
  handColors: IHandColors;
  handAngle: number;
  secondStartAngle: number;
}

interface IHandTypeWithAngleProps {
  type: string;
  seconds: number;
  minutes: number;
  hours: number;
  handColors: IHandColors;
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
      handAngle = seconds * 6;
      break;
    case 'minute':
      handAngle = minutes * 6;
      break;
    case 'hour':
      handAngle = hours * 30;
      break;
    default:
      handAngle = 0;
  }
  return handAngle;
};

const StyledHand = styled(Box)<IHandTypeProps>`
  position: absolute;
  right: 0;
  bottom: 0;
  transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
  ${props =>
    props.type === 'second' &&
    css<IFaceNumberProps>`
      background: ${innerProps =>
        innerProps.handColors && innerProps.handColors.second ? innerProps.handColors.second : '#d81c7a'};
      height: 50%;
      left: 49.5%;
      position: absolute;
      top: 10%;
      transform-origin: 50% 80%;
      width: 1%;
      z-index: 8;
      transform: rotateZ(${innerProps => innerProps.handAngle}deg);
    `}
  ${props =>
    props.type === 'minute' &&
    css<IFaceNumberProps>`
      background: ${innerProps =>
        innerProps.handColors && innerProps.handColors.minute ? innerProps.handColors.minute : '#d81c7a'};
      height: 40%;
      left: 49%;
      position: absolute;
      top: 10%;
      transform-origin: 50% 100%;
      width: 2%;
      transform: rotateZ(${innerProps => innerProps.handAngle}deg);
    `}
  ${props =>
    props.type === 'hour' &&
    css<IFaceNumberProps>`
      background: ${innerProps =>
        innerProps.handColors && innerProps.handColors.hour ? innerProps.handColors.hour : '#d81c7a'};
      height: 20%;
      left: 48.75%;
      position: absolute;
      top: 30%;
      transform-origin: 50% 100%;
      width: 2.5%;
      transform: rotateZ(${innerProps => innerProps.handAngle}deg);
    `}
`;

const Hand: React.FC<IHandTypeWithAngleProps> = ({ type, seconds, minutes, hours, handColors }) => {
  const [secondStartAngle] = useState(seconds * 6);

  return (
    <StyledHand
      type={type}
      handAngle={getHandAngle({ type, seconds, minutes, hours })}
      secondStartAngle={secondStartAngle}
      handColors={handColors}
    />
  );
};

Hand.propTypes = {
  handColors: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    minute: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
  }).isRequired,
  hours: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  seconds: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};

export default Hand;
