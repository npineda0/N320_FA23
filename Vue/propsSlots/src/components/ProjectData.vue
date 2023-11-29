<template>
    <h1>{{ project.title }}</h1>
    <p>{{ project.type }} Project</p>
    <p>Due Date: {{  project.dueDate }}</p>
    <p>Points: {{ project.points }}</p>
</template>
<script>
export default {
    inject: ['project']
}</script>