import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { JumpCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('JumpCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'JumpCircleLoading',
    () => {
      let speed = 0.5;
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
          <JumpCircleLoading speed={speed} color={color} size={size}></JumpCircleLoading>
        </Container>
      );
    }
  );
