import Alert from './alert.vue';
import AlertLink from './alert-link.vue';
import { ALL_THEME_COLORS } from '../types/theme-colors';

export default {
    component: AlertLink,
    title: 'Components/Bootstrap/Components/AlertLink',
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
    components: { Alert, AlertLink },
    args: args,
    props: Object.keys(argTypes),
    template: '<alert :themeColor="$props.themeColor">This is an <alert-link href="#">{{$props.default}}</alert-link></alert>',
});

export const primary = Template.bind({});
primary.args = {
    themeColor:  'primary', 
    default: 'alert link',
    href: '#'
};
  