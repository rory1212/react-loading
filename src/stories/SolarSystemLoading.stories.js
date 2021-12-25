import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs,number, text, radios } from '@storybook/addon-knobs';
import { SolarSystemLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('SolarSystemLoading', module)
  .addDecorator(withKnobs)
  .add(
    'SolarSystemLoading',
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
          <SolarSystemLoading speed={speed} color={color} size={size}></SolarSystemLoading>
        </Container>
      );
    }
  );
