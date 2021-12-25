import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs , text, number, radios } from '@storybook/addon-knobs';
import {  BatteryLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BatteryLoading', module)
  .addDecorator(withKnobs)
  .add('BatteryLoading', () => {
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
        <BatteryLoading color={color} speed={speed} size={size}></BatteryLoading>
      </Container>
    );
  });
