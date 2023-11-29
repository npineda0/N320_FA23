<template>
    <div>
        <p>{{ name }}</p>
        <button @click="toggleDetails">{{ visibleData ? "Hide": "Show" }} Details</button>
        <div v-if="visibleData">
            <p>Phone: {{ phone }}</p>
            <p>Email: {{ email }}</p>
            <p>Role: {{ role }}</p> 
            <button>Join </button>
        </div>
    </div>
    <br/>
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
