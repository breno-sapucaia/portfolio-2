import { styled } from 'styled-components';
import { space, color, layout, flexbox, border, background, position, grid, shadow } from 'styled-system';
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

export const Box = styled.div<BoxStyles>``;
