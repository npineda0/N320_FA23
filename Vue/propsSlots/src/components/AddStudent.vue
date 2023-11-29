<template>
    <form @submit.prevent="submitData">
    
        <label>Name:</label>
        <input type="text" v-model="enteredName"/>
        <br/>
        <label>Age:</label>
        <input type="number" v-model="enteredAge"/>
        <br/>
        <label>Major:</label>
        <input type="text" v-model="enteredMajor"/>
        <br/>
        <label>Class Rank:</label>
        <select v-model="enteredClass">
        <option value="1">Freshman</option>
        <option value="2">Sophomore</option>
        <option value="3">Junior</option>
        <option value="4">Senior</option>
        </select><br/>
        <label>Graduate:</label>
        <input type="checkbox" v-model="enteredGrad" name="graduate" value="true"/><br/>
        <button>Add Student</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            enteredName:'',
            enteredAge: '',
            enteredMajor: '',
            enteredClass:'',
            enteredGrad:''
,        }
    },
    emits:['add-student'],
    methods: {
        submitData() {
            this.$emit('add-student',this.enteredName, this.enteredAge, this.enteredMajor, this.enteredClass, this.enteredGrad)
        }
    }
}</script>