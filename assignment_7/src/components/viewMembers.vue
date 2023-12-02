<template>
    <div class="viewMember">
        <p>{{ name }}</p>
        <p>Role: {{ role }}</p> 
        <custom-button @click="toggleDetails">{{ visibleData ? "Hide": "Show" }} Details</custom-button>
        <div v-if="visibleData">
            <p>Phone: {{ phone }}</p>
            <p>Email: {{ email }}</p>
            <p>Team: {{ team }}</p>
            <custom-button>Join </custom-button>
        </div>
    </div>
</template>
<!-- name phone email role -->

<script>
export default {
    data() {
        return {
            visibleData: false
        }
    },
    props: {
        name: String,
        phone: String,
        email: String,
        role: String
    },
    methods: {
        toggleDetails() {
            this.visibleData=!this.visibleData;
        }
    }
}
</script>

<style scoped>
    .viewMember {
        height: 290px;
        width: 200px;
        background-color: lightblue;
        text-align: center;
        border-radius: 20px;
        padding: 2px;
        margin-bottom: 10px;
    }
</style>