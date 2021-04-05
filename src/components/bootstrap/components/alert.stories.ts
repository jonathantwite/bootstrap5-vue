import Alert from './alert.vue';

export default {
    component: Alert,
    title: 'Components/Bootstrap/Components/Alert'
};

export const primary = () => ({
    components: {Alert},
    template: '<alert themeColor="primary">This is an alert</alert>'
});
