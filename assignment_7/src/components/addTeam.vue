<template>
<form class="form" @submit.prevent="submitData">
    <label>Team Name:</label>
    <input class="label" type="text"  v-model="enteredTeamName" placeholder="teamName"> <br/>
    <label>Member Role:</label> 
    <select class="label" v-model="enteredMemberRole">
      <option>Designer</option>
      <option>Developer</option>
      <option>UI/UX</option>
    </select> <br/>
    <custom-button>Submit</custom-button>

  </form>
</template>

<script>
export default {
    data() {
        return {
            enteredTeamName:'',
            enteredMemberRole:'',
            members: [
        {
          id: 1,
          name: "Chandler Bing",
          phone: "1231231234",
          email: "cBing@gmail.com",
          role: 'Developer',
          team: '',
        },
        {
          id: 2,
          name: "Joey Tribbiani",
          phone: "321 321 4321",
          email: "jtribby@gmail.com",
          role: 'UI/UX',
          team: '',
        },
        {
          id: 3,
          name: "Ross Geller",
          phone: "222 333 4444",
          email: "rgeller@gmail.com",
          role: 'Developer',
          team: '',
        },
        {
          id: 4,
          name: "Monica Bing",
          phone: "123 123 1235",
          email: "mbing@gmail.com",
          role: 'Designer',
          team: '',
        },
        {
          id: 5,
          name: "Rachel Green",
          phone: "876 345 1678",
          email: "rgreen@gmail.com",
          role: 'UI/UX',
          team: '',
        },
        {
          id: 6,
          name: "Phoebe Buffay",
          phone: "678 908 5686",
          email: "pbuff@gmail.com",
          role: 'UI/UX',
          team: '',
        },
        {
          id: 7,
          name: "Stacy Boling",
          phone: "345 679 4212",
          email: "sBoling@gmail.com",
          role: 'Designer',
          team: '',
        },
        {
          id: 8,
          name: "Jake Trimult",
          phone: "443 665 7888",
          email: "jtrim@gmail.com",
          role: 'Developer',
          team: '',
        },
        {
          id: 9,
          name: "Rose Greathouse",
          phone: "345 567 9087",
          email: "rgreat@gmail.com",
          role: 'UI/UX',
          team: '',
        },
        {
          id: 10,
          name: "Mindy Kellum",
          phone: "555 666 7777",
          email: "mKellum@gmail.com",
          role: 'UI/UX',
          team: '',
        },
        {
          id: 11,
          name: "Sarah Miller",
          phone: "987 654 1234",
          email: "smiller@gmail.com",
          role: 'Developer',
          team: '',
        },
        {
          id: 12,
          name: "Caroline Bender",
          phone: "111 222 3456",
          email: "cBend@gmail.com",
          role: 'Designer',
          team: '',
        },
            ],
        }
    },
    emits:['add-team'],
    methods: {
        submitData(){
            this.$emit('add-team', this.enteredTeamName, this.enteredMemberRole)
        }
    },
        filterRole() {
            let memRoles = this.members

            if (this.enteredMemberRole)
            memRoles = memRoles.filter((item) => {
                return (item.role == this.enteredMemberRole)
            })
            console.log(enteredMemberRole)
    }
}
</script>

<style scoped>
    .form {
        height: 150px;
        width: 280px;
        background-color: lightgray;
        padding: 10px;
        border-radius: 20px;
    }
    .label {
        margin-bottom: 30px;
    }
</style>