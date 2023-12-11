<template>
  <navigation-header></navigation-header>
  <RouterView/>
</template>

<script>
import NavigationHeader from "../src/components/navHeader.vue"
export default {
  components: {
    NavigationHeader
  }
}
</script>

