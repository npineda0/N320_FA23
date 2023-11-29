import PropsOne from './components/propsOne.vue';
import PropsTwo from './components/propsTwo.vue';
import StudentData from './components/StudentData.vue';

import SlotOne from './components/SlotsOne.vue';
import CustomButton from './components/customButton.vue';
import SlotTwo from './components/SlotTwo.vue';
import AddStudent from './components/AddStudent.vue';
import App from './App.vue'
import { createApp } from 'vue';
import router from './router'

const app = createApp(App);
app.component('props-one', PropsOne);
app.component('props-two', PropsTwo);
app.component('student-data', StudentData);
app.component('slot-one', SlotOne);
app.component('slot-two',SlotTwo);
app.component('add-student', AddStudent);
app.component('custom-button', CustomButton);

app.use(router)
app.mount('#app')
