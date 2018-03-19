import styled from 'styled-components';
import { Color, Weight, MainFont, Size } from 'utils/variables';
import { media } from 'utils/media';

const Link = styled.a`
  margin-left: 70px;
  color: ${Color.graphit};
  font-weight: ${Weight.medium};
  font-family: ${MainFont};
  font-size: ${Size.tiny};
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    opacity: 0.8;
  }

  ${media.tablet`
    margin-top: 25px;
    margin-left: 0;
  `};
`;

export default Link;
