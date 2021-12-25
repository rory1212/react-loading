import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios  } from '@storybook/addon-knobs';
import { DisappearedLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('DisappearedLoading', module)
  .addDecorator(withKnobs)
  .add('DisappearedLoading', () => {
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
        <DisappearedLoading size={size} speed={speed} color={color} ></DisappearedLoading>
      </Container>
    );
  });
