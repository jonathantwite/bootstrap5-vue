<template>
    <h4 class="alert-heading"><slot></slot></h4>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'alert-heading'
});
</script>