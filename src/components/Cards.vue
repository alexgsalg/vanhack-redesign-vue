<template>
<div class="card">
  <h3 class="card-title">Front-end developer</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat malesuada ultrices quisque viverra tellus sollicitudin. Vitae sed magna tempus non faucibus facilisis. Pellentesque sed ullamcorper facilisis vehicula donec rhoncus, sit non<span>...</span></p>
  <p class="jobtype">
    <img src="../assets/img/icon-local.svg" v-if="localJob">
    <img src="../assets/img/icon-remote.svg" v-else>
    Vancouver
  </p>
  <div class="card-footer">
    <ul class="skills">
      <li class="skill__item required">React.js</li>
      <li class="skill__item required">Javascript</li>
      <li class="skill__item">Vue.js</li>
      <li class="skill__item">SASS</li>
      <li class="skill__item">Python</li>
    </ul>
    <button class="button">Apply</button>
  </div>
  <img :src="favorite ?'../assets/img/icon-star.svg' : '../assets/img/icon-star-active.svg'">
</div>
</template>

<script>
export default {
  data() {
    return {
      localJob: true,
      favorite: false
    }
  },
}
</script>

<style>

</style>
