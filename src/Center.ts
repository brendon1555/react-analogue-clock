import * as ExtraPropTypes from 'extra-prop-types';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

interface ICenterProps {
  centerColor: string;
}

const Center = styled(Box)<ICenterProps>`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  // border: 1px solid #fff;
  background-color: ${(props) => props.centerColor};
  border-radius: 100%;
  margin-left: -8px;
  margin-top: -8px;
  z-index: 100;
`;

Center.propTypes = {
  centerColor: ExtraPropTypes.color.isRequired,
};

export default Center;
