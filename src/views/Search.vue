<template>
<main>
  <PageFilter />

  <div class="pagecontent">
    <!-- Search form -->
    <form action="" class="search">
      <div class="form-inner">
        <input type="text" name="search" id="searchJob" placeholder="Search for job title, skill or remote job" v-model="searchInput">

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.3554 2.28823C10.3044 -0.762744 5.33871 -0.762744 2.28774 2.28823C-0.762579 5.33987 -0.762579 10.3049 2.28774 13.3565C5.00471 16.0729 9.23627 16.3639 12.2853 14.2428C12.3494 14.5464 12.4962 14.8361 12.7324 15.0722L17.1756 19.5154C17.823 20.1615 18.8694 20.1615 19.5136 19.5154C20.1604 18.8685 20.1604 17.8222 19.5136 17.1774L15.0704 12.7329C14.8356 12.4987 14.5452 12.3512 14.2416 12.2871C16.364 9.23742 16.073 5.00653 13.3554 2.28823ZM11.9526 11.9537C9.67477 14.2316 5.96769 14.2316 3.69054 11.9537C1.41404 9.67592 1.41404 5.96951 3.69054 3.69169C5.96769 1.41454 9.67477 1.41454 11.9526 3.69169C14.2304 5.96951 14.2304 9.67592 11.9526 11.9537Z" fill="#888888" />
        </svg>
      </div>
    </form>
    <div class="inner-content">
      <div class="search-info">
        <p class="bold">10 of 86 Jobs with these skills</p>
        <div class="recommended-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.812 0C5.289 0 0 5.289 0 11.812C0 18.335 5.289 23.625 11.812 23.625C18.335 23.625 23.625 18.335 23.625 11.812C23.625 5.289 18.335 0 11.812 0ZM14.271 18.307C13.663 18.547 13.179 18.729 12.816 18.855C12.454 18.981 12.033 19.044 11.554 19.044C10.818 19.044 10.245 18.864 9.837 18.505C9.429 18.146 9.226 17.691 9.226 17.138C9.226 16.923 9.241 16.703 9.271 16.479C9.302 16.255 9.351 16.003 9.418 15.72L10.179 13.032C10.246 12.774 10.304 12.529 10.35 12.301C10.396 12.071 10.418 11.86 10.418 11.668C10.418 11.326 10.347 11.086 10.206 10.951C10.063 10.816 9.794 10.75 9.393 10.75C9.197 10.75 8.995 10.779 8.788 10.84C8.583 10.903 8.405 10.96 8.259 11.016L8.46 10.188C8.958 9.985 9.435 9.811 9.89 9.667C10.345 9.521 10.775 9.449 11.18 9.449C11.911 9.449 12.475 9.627 12.872 9.979C13.267 10.332 13.466 10.791 13.466 11.355C13.466 11.472 13.452 11.678 13.425 11.972C13.398 12.267 13.347 12.536 13.273 12.783L12.516 15.463C12.454 15.678 12.399 15.924 12.349 16.199C12.3 16.474 12.276 16.684 12.276 16.825C12.276 17.181 12.355 17.424 12.515 17.553C12.673 17.682 12.95 17.747 13.342 17.747C13.527 17.747 13.734 17.714 13.968 17.65C14.2 17.586 14.368 17.529 14.474 17.48L14.271 18.307ZM14.137 7.429C13.784 7.757 13.359 7.921 12.862 7.921C12.366 7.921 11.938 7.757 11.582 7.429C11.228 7.101 11.049 6.702 11.049 6.236C11.049 5.771 11.229 5.371 11.582 5.04C11.938 4.708 12.366 4.543 12.862 4.543C13.359 4.543 13.785 4.708 14.137 5.04C14.49 5.371 14.667 5.771 14.667 6.236C14.667 6.703 14.49 7.101 14.137 7.429Z" fill="#888888" />
          </svg>
          <button class="button" v-if="!recommended" @click="recommended = !recommended">See recommended jobs</button>
          <button class="button" v-else @click="recommended = !recommended">See all jobs</button>
        </div>
      </div>

      <!-- Job grid -->
      <div class="jobs">
        <!-- Card Premium -->
        <Premium />

        <!-- Job Card -->
        <Job :localJob="true" />
        <Job :localJob="false" />
        <Job :localJob="true" />
        <Job :localJob="false" />

      </div>

    </div>
  </div>
</main>
</template>

<script>
// @ is an alias to /src
import PageFilter from '@/components/PageFilter'
import Premium from '@/components/VanhackPremium'
import Job from '@/components/Cards'
import jobJSON from '../assets/api/jobs.json'

export default {
  name: 'Search',
  components: {
    PageFilter,
    Premium,
    Job
  },
  data() {
    return {
      searchInput: '',
      recommended: false,
      jobList: jobJSON
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },
}
</script>
