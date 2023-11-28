<template>
  <navigation-header></navigation-header>
  <RouterView :greeting="greeting" :who="who" :count="count" :myVue="myVue" :book="book" />
</template>

  
<script>
import NavigationHeader from './components/NavigationHeader';
export default {
  components: {
    NavigationHeader
  },
  data() {
    return {
      greeting: "hello",
      who: "vue",
      count: 1,
      myVue: 'Vue.js',
      book: {
        id: 1,
        title: "Vue 3 Development"
      },
      students: [
        {
          sName: 'Robert Smuth',
          sAge: 22,
          major: 'web development',
          cLevel: 3
        }
      ]
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
