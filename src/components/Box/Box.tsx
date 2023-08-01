import { PropsWithChildren } from 'react';
import * as S from './Box.styled';

interface BoxProps extends S.BoxStyles {}

const Box = (props: PropsWithChildren<BoxProps>) => {
  return <S.Box {...props}>{props.children}</S.Box>;
};

export default Box;
