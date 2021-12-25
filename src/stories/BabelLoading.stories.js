import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text, radios } from '@storybook/addon-knobs';
import { themes } from '@storybook/theming';
import { BabelLoading } from '~/components';
import Container from './compoment/Container';
storiesOf('BabelLoading', module)
  .addDecorator(withKnobs)
  .addParameters({ options: { theme: themes.dark } })
  .add(
    'BabelLoading',
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

      speed = number('Speed (Sec)')
      color = text('Color')
      return (
        <Container>
          <BabelLoading size={size} speed={speed} color={color}></BabelLoading>
        </Container>
      );
    }
  );
