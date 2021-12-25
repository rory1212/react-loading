import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, number  } from '@storybook/addon-knobs';
import { CircleToBlockLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('CircleToBlock', module)
  .addDecorator(withKnobs)
  .add(
    'CircleToBlock',
    () => {
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
          <CircleToBlockLoading speed={speed} size={size}  color={color}></CircleToBlockLoading>
        </Container>
      );
    }
  );
