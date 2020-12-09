<template>   
<div>
<Navbar/>
<main>
<div class="container">
    <Nuxt />
  </div>
 </main> 

</div>  
</template>

 
<script>
// Импортируем компонент  Navbar,  затем выводим на странице.
//
  import Navbar from '@/component/Navbar'
  export default {
      components: {
         Navbar

      }

  }

</script>


<style>

</style>
