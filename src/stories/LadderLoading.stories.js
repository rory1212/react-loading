import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { LadderLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LadderLoading', module)
  .addDecorator(withKnobs)
  .add(
    'LadderLoading',
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
          <LadderLoading speed={speed} color={color} size={size}></LadderLoading>
        </Container>
      );
    }
  );
