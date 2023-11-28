// data() {
//     //always returns an object
//     return {
        
//     }
// }


const app = Vue.createApp( {
    data() {
        //always returns an object
        return {
            courseGoal1: "learn advanced javascript",
            courseGoal2: 'Learn view',
            vueLink: 'https://vuejs.org',
            courseGoal3: '<h4> create an application</h4>',
            counter: 10,
            name: ''
        }
    },
    //computed properties, like a method but acts more like a property
    //changing or printing out a property
    //not changing or adding a new value
    computed: {
        //returns an object 
        fullName() {
            if (this.name == '') {
                return '';
            } else {
                return this.name + ' ' + 'thomas';
            }
        },
        nameData() {
            let nameVal=[];
            //find length of fullname
            //returns name from fullName()
            let nameLength = this.fullName;
            //the length of the name is now stored in nameVal arrray
            nameVal.push(nameLength.length);

            //find middle character in fullname
            let middle = nameLength.charAt(Math.floor(nameLength.length/2));
            //middle charater is now stored in nameVal array
            nameVal.push(middle);

            return nameVal;
        }
    },
    //methods for recalculating a value, 
    //changing values, think 'counter++'
    methods: {
        newGoal() {
            const randomNum = Math.random();
            if (randomNum < 0.5) {
                return "Vue is awesome";
            } else {
                return "vue is fun";
            }
        },
        add() {
            this.counter++;
        },
        addMore(num) {
            this.counter+=num;

        },
        remove() {
            this.counter--;
        },
        // data binding
        setName(event) {
            this.name = event.target.value;
        },
        resetName() {
            this.name = '';
        },
        submitForm() {
            alert("form submitted");
        },
        consoleMe() {
            console.log("space bar clicked");
        }
    }
})

//an id type of data, will be only part controlled by vue 
app.mount('#myGoals');
