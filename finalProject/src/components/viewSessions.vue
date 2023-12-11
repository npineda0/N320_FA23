<template>
     <div class="viewSession">
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

<style>

</style>