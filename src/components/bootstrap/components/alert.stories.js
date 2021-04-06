import Alert from './alert.vue';
import {ALL_THEME_COLORS} from '../types/theme-colors';

export default {
    component: Alert,
    title: 'Components/Bootstrap/Components/Alert',
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
    components: {Alert},
    props: Object.keys(argTypes),
    template: '<alert :themeColor="$props.themeColor" :dismissible="$props.dismissible">{{$props.default}}</alert>',
  });

export const primary = Template.bind({});
primary.args = {themeColor:  'primary', default: 'This is an alert'}

export const dismissible = Template.bind({});
dismissible.args = {themeColor:  'primary', default: 'This is an alert', 
    dismissible: true}