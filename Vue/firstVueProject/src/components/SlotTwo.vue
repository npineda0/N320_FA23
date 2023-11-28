<template>
    <div>
        <navigation-header></navigation-header>
        <h1>Your students</h1>
        <slot>no students currently enrolled</slot>
    </div>
</template>

<script>
import NavigationHeader from "./NavigationHeader.vue";
export default {
    components: {
        NavigationHeader
    },
    data() {
        return {

        }
    }
}
</script>