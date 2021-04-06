import Breadcrumb from './breadcrumb.vue';

export default {
    component: Breadcrumb,
    title: 'Components/Bootstrap/Components/Breadcrumb',
    //argTypes: {
    //    items: {
    //      //control: {
    //          type: 'select',
    //        options: ['Home'],
    //        mapping: {
    //            Home: [{text: 'Home', url: '/', active: true}]
    //        }
    //      //}
    //    }
    //  }
};

const Template = (args, { argTypes }) => ({
    components: { Breadcrumb },
    props: Object.keys(argTypes),
    template: '<breadcrumb :items="$props.items"></breadcrumb>',
});

export const primary = Template.bind({});
primary.args = { items: [{ text: 'Home', url: '/', active: true }] };
  

export const secondLevel = Template.bind({});
secondLevel.args = { items: [
    { text: 'Home', url: '/', active: false },
    { text: 'Category', url: '/Category/', active: true }
] };

export const thirdLevel = Template.bind({});
thirdLevel.args = { items: [
    { text: 'Home', url: '/', active: false },
    { text: 'Category', url: '/Category/', active: false },
    { text: 'Item', url: '/Category/Item', active: true }
] };