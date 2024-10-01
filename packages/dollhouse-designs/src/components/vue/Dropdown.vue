<template>
    <div class="dropdown" @click="toggleDropdown">
        <button class="dropdown-toggle">
            {{ selectedOption || label }}
            <span class="arrow" :class="{ 'is-active': isOpen }">▼</span>
        </button>
        <ul v-if="isOpen" class="dropdown-menu">
            <li v-for="(option, index) in options" :key="index" class="dropdown-item" @click="selectOption(option)">
                {{ option }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-toggle {
    background: linear-gradient(45deg, var(--btn-gradient-start), var(--btn-gradient-end));
    /* Using gradient from reference */
    color: var(--text-color);
    /* Text color */
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-shadow: var(--link-text-shadow);
    /* Adding text shadow */
    transition: transform 0.2s;
}

.dropdown-toggle:hover {
    transform: scale(1.05);
    /* Scale effect on hover */
}

.dropdown-menu {
    position: absolute;
    background: var(--profile-dropdown-bg);
    /* Dropdown background */
    border: 1px solid var(--nav-border-color);
    /* Using nav border color */
    border-radius: 5px;
    margin-top: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
}

.dropdown-item {
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.dropdown-item:hover {
    background-color: var(--mobile-menu-hover-bg);
    /* Hover background color for items */
}

.arrow {
    margin-left: 10px;
    transition: transform 0.2s ease;
}

.arrow.is-active {
    transform: rotate(180deg);
}
</style>
