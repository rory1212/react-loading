import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios  } from '@storybook/addon-knobs';
import { DiamonLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('DiamonLoading', module)
  .addDecorator(withKnobs)
  .add('DiamonLoading', () => {
    let speed = 1;
    let color = '';
    speed = number('Speed (Sec)')
    color = text('Color')
    // let size = radios(
    //   'Size',
    //   {
    //     'small': 'small',
    //     'default': 'default',
    //     'large': 'large'
    //   },
    //   'default'
    // );
    return (
      <Container>
        <DiamonLoading speed={speed} color={color} ></DiamonLoading>
      </Container>
    );
  });
