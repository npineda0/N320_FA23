<template>
     <div class="viewSession">
        <p class="title">{{ title }}</p>
        <p class="presenter">{{ presenter }}</p>
        <p class="date">{{ sDay  }} {{ sTime }}</p>
        <p class="desc">{{ desc }}</p>
        <p class="tags">Categories: {{ tags }}</p>
    </div>
</template>


<script>
    export default {
        data() {

        },
        props: {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            desc: String,
            presenter: String,
            tags: String,
            sTime: Number,
            sDay: String,
        }
    }
</script>

<style>
.viewSession {
    height: 400px;
    width: 1000px;
    background-color: pink;
}
</style>