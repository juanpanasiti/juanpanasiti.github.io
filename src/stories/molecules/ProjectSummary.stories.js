import React from 'react';
import ProjectSummary from '../../components/molecules/ProjectSummary';

export default {
    title: 'Molecules/ProjectSummary',
    component: ProjectSummary,
};

const dataExample = 'Enim reprehenderit exercitation eiusmod consectetur consequat duis do dolor ullamco Lorem. Laborum exercitation et ut incididunt elit velit enim Lorem Lorem magna veniam. Voluptate elit laborum aute tempor ex. Eu ipsum aute amet voluptate consequat aliqua in anim commodo cupidatat quis amet nulla et. Cupidatat voluptate nulla sint laborum tempor mollit magna exercitation eu irure consequat. Nisi sunt nisi et aliqua aliquip. Laborum aliquip id anim fugiat.'
const imgExample = 'https://miro.medium.com/max/1200/1*pE2fOVDikEUwiQJlh4ggzg.jpeg'
const Template = (args) => <ProjectSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Test Project',
    data: dataExample,
    imgURL: imgExample
};
