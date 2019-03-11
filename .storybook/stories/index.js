import React from 'react'
import { storiesOf } from '@storybook/react'
import CustomButton from '../../src/components'

storiesOf("custom button", module)
    .addWithJSX("simple", () => <CustomButton />)



