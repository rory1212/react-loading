import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { MeteorRainLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('MeteorRainLoading', module)
  .addDecorator(withKnobs)
  .add(
    'MeteorRainLoading',
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
          <MeteorRainLoading speed={speed} color={color} size={size}></MeteorRainLoading>
        </Container>
      );
    }
  );
