<template>
    <span :class="classes"><slot></slot></span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import {ThemeColor} from '../types/theme-colors';

export default Vue.extend({
    name: 'Badge',
    props: {
        bgColor: {type: String as PropType<ThemeColor>},
        textDark:{type: Boolean as PropType<boolean>},
        pill:{type: Boolean as PropType<boolean>}
    },
    computed: {
        classes: function(): string {
            return "badge bg-" + this.bgColor 
                + (this.textDark ? " text-dark" : "")
                + (this.pill ? " rounded-pill" : "");
        }
    }
})
</script>