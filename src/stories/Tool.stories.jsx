import {Tool} from './Tool';

export default {
    title: 'Components/Tool',
    component: Tool,
    argTypes: {
        text: { Tool: 'text' },
    },
};

const Template= args => <Tool />

export const Default = Template.bind({});

