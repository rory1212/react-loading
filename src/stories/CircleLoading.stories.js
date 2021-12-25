import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { CircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'CircleLoading',
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
          <CircleLoading speed={speed} color={color} size={size}></CircleLoading>
        </Container>
      );
    }
  );
