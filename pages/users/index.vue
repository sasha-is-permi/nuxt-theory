<template>
  <section>
    <h1>Users page</h1>
    <div class="menu">
    <ul>

      <!-- Выводим список из элементов массива -->
      <li v-for="user of users" :key="user">
        <!-- При клике переходим без перезагрузки страницы на другую 
        страничку- с User (goTO(user)- метод, описанный ниже)-->
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
    // Программная (динамическая) навигация.
    // программно определяем что нужно переходить на страничку
    // users/1
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