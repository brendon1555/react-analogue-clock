import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import Box from './Box';

interface IAnalogueSmallTickProps {
  notchColor: string;
  borderSize: number;
  size: number;
  showNumbers?: boolean;
  i: number;
  numbersColor: string;
}

interface IAnalogueLargeTickProps {
  notchColor: string;
  borderSize: number;
  size: number;
  showNumbers: boolean;
  i: number;
  numbersColor: string;
}

interface IAnalogueLargeTickBeforeProps {
  i: number;
  numbersColor: string;
}

const AnalogueSmallTick = styled(Box)<IAnalogueSmallTickProps>`
  background: ${props => props.notchColor};
  height: 6px;
  left: calc(50% - 1px);
  position: absolute;
  top: 10px;
  transform-origin: ${props => `50% ${Math.ceil(props.size / 2) - (props.borderSize + 10)}px`};
  width: 2px;
  transform: ${props => `rotate(
      ${props.i * 6}deg)`};
`;

const AnalogueLargeTick = styled(Box)<IAnalogueLargeTickProps>`
  background: ${props => props.notchColor};
  height: 10px;
  left: calc(50% - 2px);
  position: absolute;
  top: 10px;
  transform-origin: ${props => `50% ${Math.ceil(props.size / 2) - (props.borderSize + 10)}px`};
  width: 4px;
  transform: ${props => `rotate(
        ${props.i * 6}deg)`};
  ${props =>
    props.showNumbers &&
    css<IAnalogueLargeTickBeforeProps>`
  &:before {
    content: '${innerProps => (innerProps.i === 0 ? 12 : innerProps.i / 5)}';
    position: absolute;
    width: 30px;
    text-align: center;
    left: 50%;
    margin-left: -15px;
    top: 15px;
    font-size: 25px;
    transform: ${innerProps => `rotate(-${innerProps.i * 6}deg)`};
    color: ${innerProps => innerProps.numbersColor}
  }`}
`;

AnalogueLargeTick.propTypes = {
  borderSize: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired,
  notchColor: PropTypes.string.isRequired,
  showNumbers: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

interface INotchProps {
  notchColor: string;
  size: number;
  borderSize: number;
  showNumbers: boolean;
  numbersColor: string;
}

const Notches: React.FC<INotchProps> = ({ notchColor, size, borderSize, showNumbers, numbersColor }) => {
  const notches = [];
  for (let i = 0; i < 60; i++) {
    const Component = i % 5 === 0 ? AnalogueLargeTick : AnalogueSmallTick;
    notches.push(
      <Component
        key={i}
        i={i}
        notchColor={notchColor}
        size={size}
        borderSize={borderSize}
        showNumbers={showNumbers}
        numbersColor={numbersColor}
      />,
    );
  }
  return <>{notches}</>;
};

Notches.propTypes = {
  borderSize: PropTypes.number.isRequired,
  notchColor: PropTypes.string.isRequired,
  numbersColor: PropTypes.string.isRequired,
  showNumbers: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

export default Notches;
