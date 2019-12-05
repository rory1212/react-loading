import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { RotateCircleLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('RotateCircleLoading', module)
  .addDecorator(withKnobs)
  .add(
    'RotateCircleLoading',
    () => {
      let speed = 1;
      let color = '';
      let size = '';
      speed = number('动画速度(s)');
      color = text('颜色');
      size = text('尺寸');
      return (
        <Container>
          <RotateCircleLoading speed={speed} color={color} size={size}></RotateCircleLoading>
        </Container>
      );
    }
  );