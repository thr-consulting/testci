import React from 'react';

import {storiesOf} from '@storybook/react';
import {Zug} from '../src';

storiesOf('Zug', module)
	.add('simple zug', () => <Zug zug="argggh"/>);
