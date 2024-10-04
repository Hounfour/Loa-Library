<template>
  <button :class="['btn', buttonType, buttonSize, { 'btn-full-width': fullWidth }]" :disabled="isDisabled"
    @click="onClick">
    <template v-if="isLoading">
      <span>Loading...</span>
    </template>
    <template v-else>
      <i v-if="icon" :class="iconClass"></i>
      <slot>{{ label }}</slot>
    </template>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '../../styles/src/components/button.css'

export default defineComponent({
  name: 'Button',
  props: {
    label: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      default: 'primary', // 'primary', 'secondary', 'danger'
    },
    size: {
      type: String,
      default: 'medium', // 'small', 'medium', 'large'
    },
    icon: {
      type: String,
      default: '', // Icon class for the button
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonType() {
      return `btn-${this.type}`;
    },
    buttonSize() {
      return `btn-${this.size}`;
    },
    isDisabled() {
      return this.disabled || this.isLoading;
    },
    iconClass() {
      return this.icon ? `icon-${this.icon}` : '';
    },
  },
  methods: {
    onClick(event: MouseEvent) {
      if (!this.isDisabled) {
        this.$emit('click', event);
      }
    },
  },
});
</script>
