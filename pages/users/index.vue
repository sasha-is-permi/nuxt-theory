<template>
  <section>
    <h1>{{pageTitle}}</h1>

    <ul>
      <li v-for="user of users" :key="user">
        <a href="#" @click.prevent="goTo(user)">User {{user}}</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  asyncData() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          users: [
            1, 2, 3, 4, 5
          ]
        })
      }, 500)
    })
  },
  data() {
    return {
      pageTitle: 'Users page'
    }
  },
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user)
    }
  }
}
</script>
