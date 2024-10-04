<template>
    <div class="dropdown" @click="toggleDropdown">
        <button class="dropdown-toggle">
            {{ displayText }} <!-- Using a computed property here -->
            <span class="arrow" :class="{ 'is-active': isOpen }">▼</span>
        </button>
        <ul v-if="isOpen" class="dropdown-menu">
            <li v-for="(option, index) in options" :key="index" class="dropdown-item"
                @click.stop="selectOption(option)">
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import '../../styles/src/components/dropdown.css';

export default defineComponent({
    name: 'Dropdown',
    props: {
        options: {
            type: Array,
            required: true,
        },
        label: {
            type: String,
            default: 'Select an option',
        },
    },
    data() {
        return {
            isOpen: false,
            selectedOption: null,
        };
    },
    computed: {
        displayText() {
            // If selectedOption is null, show the label; otherwise, show the selected option
            return this.selectedOption || this.label;
        },
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.isOpen = false;
            this.$emit('option-selected', option); // Emit the selected option
        },
    },
});
</script>
