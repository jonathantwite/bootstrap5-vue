<template>
    <a :href="href" class="alert-link"><slot></slot></a>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
export default Vue.extend({
    name: 'alert-link',
    props: {
        href: { type: String as PropType<string> }
    }
});
</script>