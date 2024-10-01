<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import '../styles/button.css';

interface Props {
  label: string;
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

// Define the props for the component
const props = defineProps<Props>();

// Define emits for the component
const emit = defineEmits<{
  (e: 'click'): void;
}>();

// Compute the classes for the button based on props
const classes = computed(() => ({
  'button': true,
  'button-primary': props.primary && !props.danger && !props.secondary,
  'button-secondary': props.secondary && !props.primary && !props.danger,
  'button-danger': props.danger && !props.primary && !props.secondary,
  [`button-${props.size || 'medium'}`]: true,
}));

// Compute the style for the button based on the background color prop
const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

// Handle button click and emit the click event
const onClick = () => {
  emit('click');
};
</script>

<style scoped>
/* Add additional styles here if needed */
.button {
  /* Default styles for button */
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/* Example button states */
.button-primary {
  color: white;
}

.button-secondary {
  color: white;
}

.button-danger {
  color: white;
}

/* Size styles */
.button-small {
  font-size: 12px;
}

.button-medium {
  font-size: 16px;
}

.button-large {
  font-size: 20px;
}
</style>
