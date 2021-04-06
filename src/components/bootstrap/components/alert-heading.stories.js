import Alert from './alert.vue';
import AlertHeading from './alert-heading.vue';
import { ALL_THEME_COLORS } from '../types/theme-colors';

export default {
    component: AlertHeading,
    title: 'Components/Bootstrap/Components/AlertHeading',
    argTypes: {
        themeColor: {
            control: {
                type: 'select',
                options: ALL_THEME_COLORS
            }
        },
        default: {
            control: {
                type: 'text'
            }
        }
    }
};

const Template = (args, { argTypes }) => ({
    components: { Alert, AlertHeading },
    args: args,
    props: Object.keys(argTypes),
    template: '<alert :themeColor="$props.themeColor"><alert-heading>{{$props.default}}</alert-heading>This is an alert with a heading</alert>',
});

export const primary = Template.bind({});
primary.args = {
    themeColor:  'primary', 
    default: 'Alert heading'
};
  