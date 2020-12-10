<template>
  <h1>{{user.name}}</h1>
</template>

<script>
export default {
  validate({params}) {
    return /^\d+$/.test(params.id)
  },
  asyncData({params, error}) {
    return new Promise((resolve) => {
      setTimeout(() => {
       resolve({
         user: {
         name: `Test user ${params.id}`
         }
         })
      }, 500)
    })
  }
}
</script>
