import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { SemipolarLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('SemipolarLoading', module)
  .addDecorator(withKnobs)
  .add(
    'SemipolarLoading',
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
          <SemipolarLoading speed={speed} color={color} size={size}></SemipolarLoading>
        </Container>
      );
    }
  );
