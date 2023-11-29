<template>
<form class="form" @submit.prevent="submitData">
    <label>Team Name:</label>
    <input type="text"  v-model="enteredTeamName" placeholder="teamName"> <br/>
    <label>Member Role:</label> 
    <select v-model="enteredMemberRole">
      <option>Designer</option>
      <option>Developer</option>
      <option>UI/UX</option>
    </select> <br/>
    <button>submit</button>
  </form>
</template>

<script>
export default {
    data() {
        return {
            enteredTeamName:'',
            enteredMemberRole:''
        }
    },
    emits:['add-team'],
    methods: {
        submitData(){
            this.$emit('add-team', this.enteredTeamName, this.enteredMemberRole)
        }
    }
}
</script>

<style>
    
</style>