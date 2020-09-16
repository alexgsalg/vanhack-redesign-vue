<template>
<div id="app">
  <header>
    <router-link to="/" class="logo"><img src="@/assets/img/logo-VanHack.svg" alt="Logo Vanhack" /></router-link>
    <nav class="navbar">
      <router-link to="/" class="navbar__link link--active">Find a Job</router-link>
      <router-link to="/about" class="navbar__link">Events</router-link>
      <router-link to="#" class="navbar__link">Jobs Pipeline</router-link>
      <router-link to="#" class="navbar__link">Courses</router-link>
      <router-link to="#" class="navbar__link">Library</router-link>
      <router-link to="#" class="navbar__link--odd">Invite a Friend</router-link>
      <router-link to="#" class="navbar__link nav-mobile">Slack</router-link>
    </nav>
    <div class="actions-box">
      <a href="#" class="action-slack"><img src="./assets/img/logo-Slack.svg" alt="Logo Slack" /> Slack</a>
      <a href="#" class="action-avatar"><img src="./assets/img/Avatar.jpg" alt="Avatar Usuário" /></a>
    </div>
  </header>
  <router-view />
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';
</style>
