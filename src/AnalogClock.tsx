import PropTypes from 'prop-types';
import React from 'react';
import Base from './Base';
import Border from './Border';
import Center from './Center';
import Container from './Container';
import Hand from './Hand';
import Notches from './Notches';
import useTime from './useTime';

export interface IHandColors {
  second: string;
  minute: string;
  hour: string;
}
interface IAnalogClockProps {
  size: number;
  showNumbers: boolean;
  borderWidth: number;
  baseColor: string;
  notchColor: string;
  borderColor: string;
  centerColor: string;
  handColors: IHandColors;
  numbersColor: string;
}

const AnalogClock: React.FC<IAnalogClockProps> = ({
  size,
  showNumbers,
  borderWidth,
  baseColor,
  notchColor,
  borderColor,
  centerColor,
  handColors,
  numbersColor,
}): JSX.Element => {
  const time = useTime();
  return (
    <Container size={size}>
      <Border borderColor={borderColor} borderWidth={borderWidth}>
        <Base baseColor={baseColor}>
          <Center centerColor={centerColor} />
          <Notches
            notchColor={notchColor}
            size={size}
            borderSize={borderWidth}
            showNumbers={showNumbers}
            numbersColor={numbersColor}
          />
          <Hand type="second" {...time} handColors={handColors} />
          <Hand type="minute" {...time} handColors={handColors} />
          <Hand type="hour" {...time} handColors={handColors} />
        </Base>
      </Border>
    </Container>
  );
};

AnalogClock.propTypes = {
  baseColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  borderWidth: PropTypes.number.isRequired,
  centerColor: PropTypes.string.isRequired,
  handColors: PropTypes.shape({
    hour: PropTypes.string.isRequired,
    minute: PropTypes.string.isRequired,
    second: PropTypes.string.isRequired,
  }).isRequired,
  notchColor: PropTypes.string.isRequired,
  numbersColor: PropTypes.string.isRequired,
  showNumbers: PropTypes.bool.isRequired,
  size: PropTypes.number.isRequired,
};

AnalogClock.defaultProps = {
  baseColor: '#ffffff',
  borderColor: '#000000',
  borderWidth: 5,
  centerColor: '#000000',
  handColors: {
    hour: '#000000',
    minute: '#000000',
    second: '#000000',
  },
  notchColor: '#000000',
  numbersColor: '#000000',
  showNumbers: true,
  size: 300,
};

export default AnalogClock;
