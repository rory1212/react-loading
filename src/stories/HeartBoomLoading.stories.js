import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { HeartBoomLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('HeartBoomLoading', module)
  .addDecorator(withKnobs)
  .add(
    'HeartBoomLoading',
    () => {
      let speed = 2;
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
          <HeartBoomLoading speed={speed} color={color} size={size}></HeartBoomLoading>
        </Container>
      );
    }
  );
