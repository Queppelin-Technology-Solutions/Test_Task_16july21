import {Toggle} from './Toggle';

export default {
    title: 'Components/Toggle',
    component: Toggle,
     
    argTypes: { 
        state:{ control:'select'},

    },

};

const Template= args => <Toggle />

export const Default = Template.bind({});

