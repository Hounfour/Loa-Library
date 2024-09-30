<template>
    <button :class="['hf-button', variant]" @click="handleClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'HF_Button',
    props: {
        variant: {
            type: String,
            default: 'primary',
            validator: (value) => {
                return ['primary', 'secondary', 'danger'].includes(value);
            },
        },
    },
    methods: {
        handleClick(event) {
            this.$emit('click', event);
        },
    },
};
</script>

<style scoped>
.hf-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.primary {
    background-color: blue;
    color: white;
}

.secondary {
    background-color: gray;
    /* Adjust the color as needed */
    color: white;
}

.danger {
    background-color: red;
    color: white;
}

/* Optional: Add hover effects */
.hf-button.primary:hover {
    background-color: darkblue;
}

.hf-button.secondary:hover {
    background-color: darkgray;
    /* Adjust the hover color as needed */
}

.hf-button.danger:hover {
    background-color: darkred;
}
</style>
