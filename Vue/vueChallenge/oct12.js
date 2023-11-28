const app = Vue.createApp( {
    data() {
        return {
        //add name to h2 element (using interpolation)
        name: "Naila L",
        //add date to paragraph (using interpolation)
        date: "October 12",
        //add title to h1 element (using interpolation)
        title: "Vue Challenge",
        }
    },
    methods: {
        getTodayDate() {
            let today = new Date();
            today = today.toLocaleDateString();
            return today;
        },
    }
})

app.component('greeting-input', {
    template: `<input type="text" v-model="greeting"/>
    <p>{{ greeting }}</p>

    <input type="text" @blur="displayText" ref="disRef"/>
    <!-- ref in an element have it singular, ref creates an object "refs" in js -->
    <p>{{ refText }}</p>`,
    data() {
    return {
        greeting: "",
        refText: ''
    }
    },
    watch: {
        greeting(newValue, oldValue) {
            console.log(`old value: ${oldValue}`);
            console.log(`new value: ${newValue}`);
        }
    },
    methods: {
        displayText() {
            // refs is an object and has many 
            this.refText = this.$refs.disRef.value;
        }
    }
})

//an id type of data, will be only part controlled by vue 
//article id, when using id use #
app.mount('#challenge');

