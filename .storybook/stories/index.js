import React from 'react'
import { storiesOf } from '@storybook/react'
import 'storybook-addon-jsx'
import CustomButton from '../../src/components'

storiesOf("custom button", module).addWithJSX("simple", () => (
    <button>I am a Button</button>
))



