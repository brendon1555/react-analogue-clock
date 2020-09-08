import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from './Box';

interface IContainerProps {
  size: number;
}

const Container = styled(Box)<IContainerProps>`
  height: ${(props) => `${props.size}px`};
  width: ${(props) => `${props.size}px`};
  > *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

Container.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Container;
