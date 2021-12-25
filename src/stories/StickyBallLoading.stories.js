import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs,number, text, radios } from '@storybook/addon-knobs';
import { StickyBallLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('StickyBallLoading', module)
  .addDecorator(withKnobs)
  .add(
    'StickyBallLoading',
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
          <StickyBallLoading speed={speed} color={color} size={size}></StickyBallLoading>
        </Container>
      );
    }
  );
