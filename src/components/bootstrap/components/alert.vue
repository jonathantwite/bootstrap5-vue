<template>
    <div :class="classes" role="alert"><slot></slot></div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {ThemeColor} from '../types/theme-colors'
export default Vue.extend({
    name: 'alert',
    props: {
        themeColor: {type: String as PropType<ThemeColor>}
    },
    computed: {
        classes: function(): string {
            return "alert alert-" + this.themeColor;
        }
    }
});
</script>