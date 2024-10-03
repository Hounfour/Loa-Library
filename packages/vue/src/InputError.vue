<template>
    <div v-if="message" class="input-error text-red-500 text-sm">
        {{ message }}
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'InputError',
    props: {
        message: {
            type: String as PropType<string | null>,
            default: null,
        },
    },
});
</script>

<style scoped>
.input-error {
    margin-top: 0.25rem;
}
</style>