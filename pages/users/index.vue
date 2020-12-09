<template>
  <section>
    <h1>Users page</h1>
    <div class="menu">
    <ul>
      <li v-for="user of users" :key="user">
        <a href="#" @click.prevent="goTo(user)">User {{user}}</a>
      </li>
    </ul>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    users: [
      1, 2, 3, 4, 5
    ]
  }),
  methods: {
    goTo(user) {
      this.$router.push('/users/' + user)
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align:center;
}

.menu{
  display:flex;
  justify-content:center;
}

</style>