import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { RotateCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('RotateCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'RotateCircleLoading',
    () => {
      let speed = 1;
      let color = '';
      let size = radios(
        'Size',
        {
          'small': 'small',
          'default': 'default',
          'large': 'large'
        },
        'default'
      );
      speed = number('Speed (Sec)');
      color = text('Color');
      return (
        <Container>
          <RotateCircleLoading speed={speed} color={color} size={size}></RotateCircleLoading>
        </Container>
      );
    }
  );
