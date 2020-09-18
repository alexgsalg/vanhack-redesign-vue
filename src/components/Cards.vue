<template>
<div class="card" v-for="job in jobList" :key="job.id">
  <h3 class="card__title">{{job.title}}</h3>
  <p>{{job.description.mainDesc.substring(0, 170) || job.description.mustHave.substring(0, 170) }}<span>...</span></p>
  <div class="card__jobtype">
    <img src="@/assets/img/icon-local.svg" :alt="job.location.isRemote" v-if="job.location.isRemote">
    <img src="@/assets/img/icon-remote.svg" :alt="job.location.isRemote" v-else>
    {{job.location.city}}
  </div>
  <div class="card__footer">
    <ul class="skills">
      <li class="skill__item required" v-for="skillR in job.mainSkills" :key="skillR.name">{{skillR.name}}</li>
      <li class="skill__item" v-for="skillO in job.otherSkills" :key="skillO.name">{{skillO.name}}</li>
    </ul>
    <button class="button">Apply</button>
  </div>
  <img class="card__star" :src="require(`@/assets/img/${isFavorite}.svg`)" @click="favorite = !favorite">
  <!-- <img class="card__star" :src="`@/assets/img/${favorite}.svg`"> -->
</div>
</template>

<script>
import jobJSON from '../assets/api/jobs.json'

export default {
  props: {

  },
  data() {
    return {
      jobList: jobJSON.structure,
      favorite: '',
      mainSkills: Array
    }
  },

  computed: {
    isFavorite() {
      return this.favorite === false ? 'icon-star' : 'icon-star-active'
    },
  },
}
</script>

<style>

</style>
