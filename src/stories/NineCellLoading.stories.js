import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { NineCellLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('NineCellLoading', module)
  .addDecorator(withKnobs)
  .add(
    'NineCellLoading',
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
          <NineCellLoading speed={speed} color={color} size={size}></NineCellLoading>
        </Container>
      );
    }
  );
