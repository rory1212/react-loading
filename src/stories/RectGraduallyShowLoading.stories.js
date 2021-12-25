import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { RectGraduallyShowLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('RectGraduallyShowLoading', module)
  .addDecorator(withKnobs)
  .add(
    'RectGraduallyShowLoading',
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
          <RectGraduallyShowLoading speed={speed} color={color} size={size}></RectGraduallyShowLoading>
        </Container>
      );
    }
  );
