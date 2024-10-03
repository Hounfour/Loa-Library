<template>
    <label class="flex items-center">
        <input type="checkbox" :value="value" v-model="proxyChecked" class="checkbox-input" />
        <span class="checkbox-value">
            {{ value }} <!-- Direct access to value prop -->
        </span>
    </label>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../../styles/src/components/checkbox.css';

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
