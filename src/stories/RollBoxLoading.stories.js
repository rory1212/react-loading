import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { RollBoxLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('RollBoxLoading', module)
  .addDecorator(withKnobs)
  .add(
    'RollBoxLoading',
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
          <RollBoxLoading speed={speed} color={color} size={size}></RollBoxLoading>
        </Container>
      );
    }
  );
