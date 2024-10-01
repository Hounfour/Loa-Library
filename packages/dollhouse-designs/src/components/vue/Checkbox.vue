<template>
    <label class="flex items-center">
        <input type="checkbox" :value="value" v-model="proxyChecked"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 accent-[#f39c12] transition-transform duration-200 ease-in-out" />
        <span class="ml-2 text-white">
            {{ value }} <!-- Direct access to value prop -->
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const emit = defineEmits(['update:checked']);

const props = defineProps<{
    checked: boolean;
    value?: any;
}>();

const proxyChecked = computed({
    get() {
        return props.checked;
    },
    set(val) {
        emit('update:checked', val);
    },
});
</script>

<style scoped>
/* Add any additional styling needed to match the design */
input[type="checkbox"] {
    appearance: none;
    /* Remove default styling */
    width: 20px;
    /* Custom size */
    height: 20px;
    /* Custom size */
    background-color: var(--background-color, #fff);
    /* Fallback */
    border: 2px solid var(--nav-border-color, #ccc);
    /* Fallback */
    border-radius: 5px;
    /* Rounded corners */
    cursor: pointer;
    /* Pointer cursor on hover */
    position: relative;
    /* Needed for the custom checkmark */
}

/* Custom checkmark styles */
input[type="checkbox"]:checked {
    background-color: var(--btn-gradient-start, #4caf50);
    /* Fallback */
}

input[type="checkbox"]:checked::before {
    content: '';
    position: absolute;
    top: 2px;
    /* Adjust positioning */
    left: 2px;
    /* Adjust positioning */
    width: 15px;
    /* Custom size */
    height: 15px;
    /* Custom size */
    background: var(--btn-gradient-end, #8bc34a);
    /* Fallback */
    border-radius: 3px;
    /* Rounded corners */
}
</style>
