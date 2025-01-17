import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { TouchBallLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('TouchBallLoading', module)
  .addDecorator(withKnobs)
  .add('TouchBallLoading', () => {
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
        <TouchBallLoading size={size} speed={speed} color={color} ></TouchBallLoading>
      </Container>
    );
  });
