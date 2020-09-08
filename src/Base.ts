import * as ExtraPropTypes from 'extra-prop-types';
import styled from 'styled-components';
import Box from './Box';

interface IBaseProps {
  baseColor: string;
}

const Base = styled(Box)<IBaseProps>`
  position: relative;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.baseColor};
  border-radius: 100%;
`;

Base.propTypes = {
  baseColor: ExtraPropTypes.color.isRequired,
};

export default Base;
