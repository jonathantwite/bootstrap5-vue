import Badge from './badge.vue';
import {ALL_THEME_COLORS} from '../types/theme-colors';

export default {
    component: Badge,
    title: 'Components/Bootstrap/Components/Badge',
    argTypes: {
        bgColor: {
          control: {
            type: 'select',
            options: ALL_THEME_COLORS
          }
        },
        textDark: {
            type: 'select',
            options: [true, false]
        },
        default: {
            control: {
                type: 'text'
            }
        }
      }
};

const Template = (args, { argTypes }) => ({
    components: {Badge},
    props: Object.keys(argTypes),
    template: '<badge :bgColor="$props.bgColor" :textDark="$props.textDark" :pill="$props.pill">{{$props.default}}</badge>',
  });

export const primary = Template.bind({});
primary.args = {bgColor:  'primary', textDark: false, pill: false, default: 'This is a badge'};

export const textDark = Template.bind({});
textDark.args = {bgColor:  'warning', textDark: true, pill: false, default: 'This is a badge'};

export const pill = Template.bind({});
pill.args = {bgColor:  'primary', textDark: false, pill: true, default: 'This is a badge'};
