import React from 'react';
import Text from '../../components/atoms/Text';

export default {
    title: 'Atoms/Text',
    component: Text,
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default Text',
};
