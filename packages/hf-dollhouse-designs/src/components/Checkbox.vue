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

<template>
    <label class="flex items-center">
        <input type="checkbox" :value="value" v-model="proxyChecked"
            class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 accent-[#f39c12] transition-transform duration-200 ease-in-out" />
        <span class="ml-2 text-white"> <!-- Adjust the text color as needed -->
            {{ props.value }}
        </span>
    </label>
</template>

<style scoped>
/* Add any additional styling needed to match the design */
input[type="checkbox"] {
    appearance: none;
    /* Remove default styling */
    width: 20px;
    /* Custom size */
    height: 20px;
    /* Custom size */
    background-color: var(--background-color);
    /* Match background */
    border: 2px solid var(--nav-border-color);
    /* Match border color */
    border-radius: 5px;
    /* Rounded corners */
    cursor: pointer;
    /* Pointer cursor on hover */
    position: relative;
    /* Needed for the custom checkmark */
}

/* Custom checkmark styles */
input[type="checkbox"]:checked {
    background-color: var(--btn-gradient-start);
    /* Match gradient start color */
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
    background: var(--btn-gradient-end);
    /* Match gradient end color */
    border-radius: 3px;
    /* Rounded corners */
}
</style>
