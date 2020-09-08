import * as ExtraPropTypes from 'extra-prop-types';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

interface IBorderProps {
  borderColor: string;
  borderWidth: number;
}

const Border = styled(Box)<IBorderProps>`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: ${(props) => (props.borderWidth && props.borderColor ? props.borderColor : 'transparent')};
  padding: ${(props) => (props.borderWidth ? `${props.borderWidth}px` : '0')};
  border-radius: 100%;
`;

Border.propTypes = {
  borderColor: ExtraPropTypes.color.isRequired,
  borderWidth: PropTypes.number.isRequired,
};

export default Border;
