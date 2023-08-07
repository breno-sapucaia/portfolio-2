import { styled } from 'styled-components';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  BackgroundProps,
  PositionProps,
  GridProps,
  ShadowProps,
  space,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
} from 'styled-system';

export type BoxStyles = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  BackgroundProps &
  PositionProps &
  GridProps &
  ShadowProps;

export const Box = styled.div<BoxStyles>`
  ${space}
  ${color}
  ${flexbox}
  ${layout}
  ${border}
  ${background}
  ${position}
  ${grid}
  ${shadow}
`;
