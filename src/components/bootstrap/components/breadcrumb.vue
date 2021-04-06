<template>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <template v-for="item in items">
                <li 
                    :key="item.url" 
                    :class="'breadcrumb-item' + (item.active ? ' active' : '')" 
                    :aria-current="item.active ? 'page' : ''">

                    <a v-if="!(item.active)" :href="item.url">{{item.text}}</a>
                    <template v-else>{{item.text}}</template>
                </li>
            </template>
        </ol>
    </nav>
</template>

<script lang="ts">
export interface BreadcrumbItem {
    text: string,
    url: string,
    active: boolean
}

import Vue, { PropType } from 'vue';

export default Vue.extend({
    name: 'Breadcrumb',
    props: {
        items: {type: Array as PropType<BreadcrumbItem[]>}
    }    
})
</script>