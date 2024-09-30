<template>
    <div class="text-input">
        <label :for="id" class="input-label text-gray-700 text-sm">{{ label }}</label>
        <input :id="id" type="text" class="input-field border-gray-300 rounded-md" v-model="inputValue"
            @input="updateValue" :placeholder="placeholder" />
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'TextInput',
    props: {
        label: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
        },
        modelValue: {
            type: String,
            default: '',
        },
        id: {
            type: String,
            required: true,
        },
    },
    setup(props, { emit }) {
        const inputValue = ref(props.modelValue);

        const updateValue = () => {
            emit('update:modelValue', inputValue.value);
        };

        return {
            inputValue,
            updateValue,
        };
    },
});
</script>

<style scoped>
.input-field {
    width: 100%;
    padding: 8px;
}
</style>