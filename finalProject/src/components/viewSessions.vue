<template>
     <div class="viewSession">
        <p class="title">{{ title }}</p>
        <div class="nameDate">
            <p class="presenter">Presented By: {{ presenter }}</p>
            <p class="date">{{ sDay  }}: {{ sTime }}</p>
        </div>
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
    background-color: #f5f2e1;
    border-radius: 20px;
    margin-left: 40px;
    font-family: gill sans;
}
.title {
    width: 900px;
    padding-top: 10px;
}
.nameDate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 920px;
}
.desc {
    width: 920px;
    margin: 0 auto;
    margin-top: 20px;
}
</style>