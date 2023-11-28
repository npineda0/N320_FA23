<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
      sName" :sName="student.sName" :sAge="student.sAge"
      :major="student.major" 
  </div>
  <div>
    <slot-one>
      <h2>this is from app.vue</h2>
      <template v-slot:greeting>{{ greeting }}</template>
      <template #person></template>
    </slot-one>
  </div>
  <div>
    <slot-two>
      <ul v-if="pastStudents.length!=0">
        <li v-for="s in pastStudents" :key="s.sName">{{ s.sName }}</li>
      </ul>
    </slot-two>
  </div>

</template>

<script>
  export default {
    data 
  }
</script>
