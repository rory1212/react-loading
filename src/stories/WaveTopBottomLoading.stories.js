import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, radios } from '@storybook/addon-knobs';
import { WaveTopBottomLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('WaveTopBottomLoading', module)
  .addDecorator(withKnobs)
  .add('WaveTopBottomLoading', () => {
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
        <WaveTopBottomLoading  size={size} speed={speed} color={color} ></WaveTopBottomLoading>
      </Container>
    );
  });
