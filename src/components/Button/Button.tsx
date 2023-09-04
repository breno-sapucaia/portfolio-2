import { PropsWithChildren } from 'react';
import { SystemProps, x, th, useTh } from '@xstyled/styled-components';

export type ButtonStyle = {
  variant: 'default' | 'contained';
} & SystemProps;

const Button = (props: PropsWithChildren<ButtonStyle>) => {
  const defaultProps: SystemProps = {
    py: '12px',
    px: '32px',
    borderStyle: 'solid',
    outline: { focus: 'none' },
    borderRadius: '12px',
    transition: true,
    transitionDuration: 200,
    fontWeight: 500,
    fontSize: 16,
  };

  if (props.variant === 'contained') {
    return (
      <x.button
        {...defaultProps}
        bg={{ _: 'primary-lightest', hover: 'primary-light' }}
        boxShadow={{ _: 'default', active: 'inner' }}
        color={'primary'}
      >
        {props.children}
      </x.button>
    );
  }

  return (
    <x.button
      {...defaultProps}
      borderColor={'border'}
      bg={{ _: 'white', hover: 'button-hover' }}
      boxShadow={{ _: 'default', active: 'inner' }}
    >
      {props.children}
    </x.button>
  );
};

export default Button;
