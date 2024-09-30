<template>
    <router-link :to="to" class="nav-link" v-slot="{ isActive }">
        <slot :is-active="isActive"></slot>
    </router-link>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'NavLink',
    props: {
        to: {
            type: String as PropType<string>,
            required: true,
        },
    },
    setup(props) {
        const route = useRoute();
        const isActive = computed(() => route.path === props.to);

        return { isActive };
    },
});
</script>

<style scoped>
.nav-link {
    text-decoration: none;
    color: gray;
}

.nav-link.active {
    font-weight: bold;
    color: blue;
    /* Adjust active link color */
}
</style>