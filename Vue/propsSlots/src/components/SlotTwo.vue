<template>
    <h1>Slots Lesson Two</h1>
    <div>
        <navigation-header></navigation-header>
        <h1>Your Students</h1>
        <slot>No students are currently enrolled.</slot>
    </div>
    <hr/>
   
</template>
<script>
import NavigationHeader from './NavigationHeader.vue';

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