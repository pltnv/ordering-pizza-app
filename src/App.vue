<template>
  <div class="nav">
    <router-link to="/">
      <div class="logo">
        <img src="../src/images/logo.png" alt="Company icon" class="logo__icon" >
        <span class="logo__name"> Pizza </span>
      </div>
    </router-link>
  </div>
  <router-view/>
</template>

<script>
import BucketList from "@/components/BucketList";

export default {
  name: "App.vue",
  components: {
    BucketList
  },
  setup(props, { emit }) {
    return {};
  },
}

</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

body{
  margin: 0;
}

.nav {
  padding: 2rem;
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
}

.nav a {
  font-weight: bold;
  color: #d5a25f;
  text-decoration: none;
}

.logo__icon{
  height: 15%;
  width: 15%;
}

.logo{
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-left: 1.5rem;
  font-size: 2rem;
}

@media screen and (max-width : 870px) {
  .logo__icon{
    height: 20%;
    width: 20%;
  }

  .logo{
    justify-content: center;
  }
}

@media screen and (max-width : 600px) {
  .nav {
    padding: 2.5rem;
    justify-content: center;
  }
}
</style>
