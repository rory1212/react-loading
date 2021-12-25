import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs , text, number, radios } from '@storybook/addon-knobs';
import { CommonLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CommonLoading', module)
  .addDecorator(withKnobs)
  .add('CommonLoading', () => {
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
        <CommonLoading color={color} speed={speed} size={size}></CommonLoading>
      </Container>
    );
  });
