<template>
    <div :class="classes" role="alert">
        <slot></slot>
        <button v-if="dismissible" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>

<script lang="ts">
import Vue, {PropType} from 'vue';
import {ThemeColor} from '../types/theme-colors';

export default Vue.extend({
    name: 'Alert',
    props: {
        themeColor: {type: String as PropType<ThemeColor>},
        dismissible: {type: Boolean as PropType<boolean>}
    },
    computed: {
        classes: function(): string {
            return "alert alert-" + this.themeColor + (this.dismissible ? " alert-dismissible fade show" : "");
        }
    }
});
</script>
