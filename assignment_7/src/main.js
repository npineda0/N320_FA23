import AddTeam from './components/addTeam.vue';
import ViewMembers from './components/viewMembers.vue';
import App from './App.vue'
import { createApp } from 'vue';
import router from './router';

const app = createApp(App); 
app.component('add-team', AddTeam);
app.component('view-members', ViewMembers);

app.use(router)
app.mount('#app')