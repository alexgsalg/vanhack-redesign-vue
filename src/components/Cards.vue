<template>
<div class="card">
  <h3 class="card__title">Front-end developer</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat malesuada ultrices quisque viverra tellus sollicitudin. Vitae sed magna tempus non faucibus facilisis. Pellentesque sed ullamcorper facilisis vehicula donec rhoncus, sit non<span>...</span></p>
  <div class="card__jobtype">
    <img src="../assets/img/icon-local.svg" v-if="localJob">
    <img src="../assets/img/icon-remote.svg" v-else>
    Vancouver
  </div>
  <div class="card__footer">
    <ul class="skills">
      <li class="skill__item required">React.js</li>
      <li class="skill__item required">Javascript</li>
      <li class="skill__item">Vue.js</li>
      <li class="skill__item">SASS</li>
      <li class="skill__item">Python</li>
    </ul>
    <button class="button">Apply</button>
  </div>
  <img class="card__star" :src="require(`@/assets/img/${isFavorite}.svg`)" @click="favorite = !favorite">
  <!-- <img class="card__star" :src="`@/assets/img/${favorite}.svg`"> -->
</div>
</template>

<script>
export default {
  props: {
    localJob: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      favorite: false
    }
  },

  computed: {
    isFavorite() {
      return this.favorite === false ? 'icon-star' : 'icon-star-active'
    }
  },
}
</script>

<style>

</style>
