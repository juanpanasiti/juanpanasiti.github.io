import React from 'react';
import Button from '../../components/atoms/Button';


export default {
    title: 'Atoms/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    label: 'Default Button'
}

export const Primary = Template.bind({})
Primary.args = {
    label: 'Primary Button',
    color: 'primary'
}