import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { BlockReserveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockReserveLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockReserveLoading',
    () => {
      let speed = 1;
      let color = '';
      speed = number('Speed (Sec)')
      color = text('Color')
      let size = radios(
        'Size',
        {
          'small': 'small',
          'default': 'default',
          'large': 'large'
        },
        'default'
      );
      return (
        <Container>
          <BlockReserveLoading size={size} speed={speed} color={color}></BlockReserveLoading>
        </Container>
      );
    }
  );
