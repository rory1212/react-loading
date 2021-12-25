import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { BlockRotateLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BlockRotateLoading', module)
  .addDecorator(withKnobs)
  .add(
    'BlockRotateLoading',
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
          <BlockRotateLoading size={size} speed={speed} color={color}></BlockRotateLoading>
        </Container>
      );
    }
  );
