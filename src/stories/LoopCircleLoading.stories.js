import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, number  } from '@storybook/addon-knobs';
import { LoopCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('LoopCircleLoading', module)
  .addDecorator(withKnobs)
  .add('LoopCircleLoading', () => {
    let color = '';
    let speed = 1.2;
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
    speed = number('Speed (Sec)')
    return (
      <Container>
        <LoopCircleLoading speed={speed} size={size} color={color}></LoopCircleLoading>
      </Container>
    );
  });
