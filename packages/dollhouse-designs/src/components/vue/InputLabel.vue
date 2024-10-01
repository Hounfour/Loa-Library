<template>
    <label :for="forId" class="input-label text-gray-700 text-sm">
        {{ value }}
        <slot></slot>
    </label>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'InputLabel',
    props: {
        forId: {
            type: String as PropType<string>,
            required: true,
        },
        value: {
            type: String as PropType<string>,
            required: true,
        },
    },
});
</script>

<style scoped>
.input-label {
    display: block;
    margin-bottom: 0.5rem;
}
</style>