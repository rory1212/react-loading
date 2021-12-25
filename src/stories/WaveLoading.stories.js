import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, radios } from '@storybook/addon-knobs';
import { WaveLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveLoading', module)
  .addDecorator(withKnobs)
  .add('WaveLoading', () => {
    let color = '';
    let speed = 1.2;
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
    speed = number('Speed (Sec)')
    return (
      <Container>
        <WaveLoading speed={speed} size={size} color={color} ></WaveLoading>
      </Container>
    );
  });
